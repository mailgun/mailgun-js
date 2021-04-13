import RequestOptions from './interfaces/RequestOptions';
declare class Request {
    private username;
    private key;
    private url;
    private timeout;
    private headers;
    private formData;
    constructor(options: RequestOptions, formData: new () => FormData);
    request(method: string, url: string, options?: any): Promise<{
        body: any;
        status: number;
    }>;
    query(method: string, url: string, query: any, options?: any): Promise<{
        body: any;
        status: number;
    }>;
    command(method: string, url: string, data: any, options?: any): Promise<{
        body: any;
        status: number;
    }>;
    get(url: string, query?: any, options?: any): Promise<{
        body: any;
        status: number;
    }>;
    head(url: string, query: any, options: any): Promise<{
        body: any;
        status: number;
    }>;
    options(url: string, query: any, options: any): Promise<{
        body: any;
        status: number;
    }>;
    post(url: string, data: any, options?: any): Promise<{
        body: any;
        status: number;
    }>;
    postMulti(url: string, data: any): Promise<{
        body: any;
        status: number;
    }>;
    put(url: string, data: any, options?: any): Promise<{
        body: any;
        status: number;
    }>;
    patch(url: string, data: any, options?: any): Promise<{
        body: any;
        status: number;
    }>;
    delete(url: string, data?: any, options?: any): Promise<{
        body: any;
        status: number;
    }>;
}
export default Request;
