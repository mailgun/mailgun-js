import Request from "./request";

type Attachment = {
  data: ReadableStream,
  filename: string,
  contentType: string,
  knownLength?: number,
}

type createData = {
  to: string | string[],
  from: string,
  subject: string,
  text: string,
  attachment: (Attachment | Attachment[]),
  'o:tag'?: string,
  'o:campaign'?: any,
  'o:deliverytime'?: string,
  'o:dkim'?: 'yes' | 'no' | 'true' | 'false',
  'o:testmode'?: 'yes',
  'o:tracking'?: 'yes' | 'no' | 'true' | 'false',
  'o:tracking-clicks'?: 'yes' | 'no' | 'true' | 'false',
  'o:tracking-opens'?: 'yes' | 'no' | 'true' | 'false',
  html?: string,
  message?: string,
} & Record<string, any>

export default class MessagesClient {
  request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  _parseResponse(response: { body: any }) {
    if (response.body) {
      return response.body;
    }

    return response;
  }

  create(domain: string, data: createData) {
    if (data.message) {
      return this.request.postMulti(`/v3/${domain}/messages.mime`, data)
      .then(this._parseResponse);
    }

    return this.request.postMulti(`/v3/${domain}/messages`, data)
      .then(this._parseResponse);
  }
}
