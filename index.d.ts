import * as express from 'express';
import * as http from 'http';

declare function ExpressHttpProxy(host: string, options: ExpressHttpProxy.IOptions): express.RequestHandler;
declare namespace ExpressHttpProxy {
	interface IOptions {
		port?: number;
		intercept?: (
			rsp: http.ServerResponse,
			rspData: Buffer,
			req: express.Request,
			res: express.Response,
			callback: (err: any, rspd: string | Buffer, send?: boolean) => void
		) => void;
		decorateRequest?: (reqOpt: IRequestOption) => IRequestOption;
		forwardPath?: (req: express.Request, res: express.Response) => string;
		filter?: Function;
		limit?: string;
		preserveHostHdr?: boolean;
		headers?: { [key: string]: any};
	}

	interface IRequestOption {
		hostname: string;
		port: number;
		headers: { [key: string]: any};
		method: string;
		path: string;
		bodyContent: string | Buffer;
		params: any;
	}
}

export = ExpressHttpProxy;
