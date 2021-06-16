import Btoa from 'btoa';
import urljoin from 'url-join';
import ky from 'ky-universal';
import APIError from './error';
import RequestOptions from './interfaces/RequestOptions';
import APIErrorOptions from './interfaces/APIErrorOptions';

interface APIResponse {
  status: number;
  body: any;
}
const isStream = (attachment: any) => typeof attachment === 'object' && typeof attachment.pipe === 'function';

const getAttachmentOptions = (item: any): {
  filename?: string,
  contentType?: string,
  knownLength?: number
} => {
  if (typeof item !== 'object' || isStream(item)) return {};

  const {
    filename,
    contentType,
    knownLength
  } = item;

  return {
    ...(filename ? { filename } : { filename: 'file' }),
    ...(contentType && { contentType }),
    ...(knownLength && { knownLength })
  };
};

const streamToString = (stream: any) => {
  const chunks: any = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk: any) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};

class Request {
  private username: string;
  private key: string;
  private url: string;
  private timeout: number;
  private headers: any;
  private formData: new () => FormData;

  constructor(options: RequestOptions, formData: new () => FormData) {
    this.username = options.username;
    this.key = options.key;
    this.url = options.url as string;
    this.timeout = options.timeout;
    this.headers = options.headers || {};
    this.formData = formData;
  }

  private objectToURLSearchParams(data: any): URLSearchParams {
    const urlencodedData = new URLSearchParams();

    if (!data) return null;

    Object.entries(data).forEach(([key, value]: any) =>
      urlencodedData.append(key, value)
    );

    return urlencodedData
  }

  async request(method: string, url: string, inputOptions?: any): Promise<APIResponse> {
    const options = { ...inputOptions };
    const basic = Btoa(`${this.username}:${this.key}`);
    const headers = {
      Authorization: `Basic ${basic}`,
      ...this.headers,
      ...options?.headers
    };

    delete options?.headers;

    if (!headers['Content-Type']) {
      // for form-data it will be Null so we need to remove it
      delete headers['Content-Type'];
    }

    const params = { ...options };

    if (options?.query && Object.getOwnPropertyNames(options?.query).length > 0) {
      params.searchParams = options.query;
      delete params.query;
    }

    const response = await ky(
      urljoin(this.url, url),
      {
        method: method.toLocaleUpperCase(),
        headers,
        throwHttpErrors: false,
        timeout: this.timeout,
        ...params
      }
    );

    if (!response?.ok) {
      const message = response?.body && isStream(response.body)
        ? await streamToString(response.body)
        : await response?.json();

      throw new APIError({
        status: response?.status,
        statusText: response?.statusText,
        body: { message }
      } as APIErrorOptions);
    }

    return {
      body: await response?.json(),
      status: response?.status
    };
  }

  query(method: string, url: string, query: any, options?: any) : Promise<APIResponse> {
    return this.request(method, url, { query, ...options });
  }

  command(method: string, url: string, data: any, options?: any) : Promise<APIResponse> {
    return this.request(method, url, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
      ...options
    });
  }

  get(url: string, query?: any, options?: any) : Promise<APIResponse> {
    return this.query('get', url, query, options);
  }

  head(url: string, query: any, options: any) : Promise<APIResponse> {
    return this.query('head', url, query, options);
  }

  options(url: string, query: any, options: any) : Promise<APIResponse> {
    return this.query('options', url, query, options);
  }

  post(url: string, data: any, options?: any) : Promise<APIResponse> {
    return this.command('post', url, this.objectToURLSearchParams(data), options);
  }

  postMulti(url: string, data: any): Promise<APIResponse> {
    const params: any = {
      headers: { 'Content-Type': null }
    };
    const formData = this.createFormData(data);
    return this.command('post', url, formData, params);
  }

  putMulti(url: string, data: any): Promise<APIResponse> {
    const params: any = {
      headers: { 'Content-Type': null }
    };
    const formData = this.createFormData(data);
    return this.command('put', url, formData, params);
  }

  createFormData(data: any): FormData {
    const formData: FormData = Object.keys(data)
      .filter(function (key) { return data[key]; })
      .reduce((formDataAcc, key) => {
        if (key === 'attachment' || key === 'inline') {
          const obj = data[key];

          if (Array.isArray(obj)) {
            obj.forEach(function (item) {
              const itemData = isStream(item) ? item : item.data;
              const options = getAttachmentOptions(item);
              (formDataAcc as any).append(key, itemData, options);
            });
          } else {
            const objData = isStream(obj) ? obj : obj.data;
            const options = getAttachmentOptions(obj);
            (formDataAcc as any).append(key, objData, options);
          }

          return formDataAcc;
        }

        if (Array.isArray(data[key])) {
          data[key].forEach(function (item: any) {
            formDataAcc.append(key, item);
          });
        } else if (data[key] != null) {
          formDataAcc.append(key, data[key]);
        }
        return formDataAcc;
      // eslint-disable-next-line new-cap
      }, new this.formData());
    return formData;
  }

  put(url: string, data: any, options?: any): Promise<APIResponse> {
    return this.command('put', url, this.objectToURLSearchParams(data), options);
  }

  patch(url: string, data: any, options?: any): Promise<APIResponse> {
    return this.command('patch', url, this.objectToURLSearchParams(data), options);
  }

  delete(url: string, data?: any, options?: any): Promise<APIResponse> {
    return this.command('delete', url, this.objectToURLSearchParams(data), options);
  }
}

export default Request;
