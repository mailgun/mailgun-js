import Request from "./request";
declare type Attachment = {
    data: ReadableStream;
    filename: string;
    contentType: string;
    knownLength?: number;
};
declare type createData = {
    to: string | string[];
    from: string;
    subject: string;
    text: string;
    attachment: (Attachment | Attachment[]);
    'o:tag'?: string;
    'o:campaign'?: any;
    'o:deliverytime'?: string;
    'o:dkim'?: 'yes' | 'no' | 'true' | 'false';
    'o:testmode'?: 'yes';
    'o:tracking'?: 'yes' | 'no' | 'true' | 'false';
    'o:tracking-clicks'?: 'yes' | 'no' | 'true' | 'false';
    'o:tracking-opens'?: 'yes' | 'no' | 'true' | 'false';
    html?: string;
    message?: string;
} & Record<string, any>;
export default class MessagesClient {
    request: Request;
    constructor(request: Request);
    _parseResponse(response: {
        body: any;
    }): any;
    create(domain: string, data: createData): Promise<any>;
}
export {};
