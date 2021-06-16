import RequestOptions from './interfaces/RequestOptions';
interface APIResponse {
    status: number;
    body: any;
}
declare class Request {
    private username;
    private key;
    private url;
    private timeout;
    private headers;
    private formData;
    constructor(options: RequestOptions, formData: new () => FormData);
    private objectToURLSearchParams;
    request(method: string, url: string, inputOptions?: any): Promise<APIResponse>;
    query(method: string, url: string, query: any, options?: any): Promise<APIResponse>;
    command(method: string, url: string, data: any, options?: any): Promise<APIResponse>;
    get(url: string, query?: any, options?: any): Promise<APIResponse>;
    head(url: string, query: any, options: any): Promise<APIResponse>;
    options(url: string, query: any, options: any): Promise<APIResponse>;
    post(url: string, data: any, options?: any): Promise<APIResponse>;
    postMulti(url: string, data: any): Promise<APIResponse>;
    putMulti(url: string, data: any): Promise<APIResponse>;
    createFormData(data: any): FormData;
    put(url: string, data: any, options?: any): Promise<APIResponse>;
    patch(url: string, data: any, options?: any): Promise<APIResponse>;
    delete(url: string, data?: any, options?: any): Promise<APIResponse>;
}
export default Request;
