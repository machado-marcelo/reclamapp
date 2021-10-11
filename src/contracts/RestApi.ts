import { HttpClient } from './HttpClient';
import { Response } from './Response';

export interface RestApi {
  httpClient: HttpClient;
  get({ routePath, context }: { routePath: string; context?: any; }): Promise<Response>;
  post({ routePath, body, context }: { routePath: string; body: any; context?: any; }): Promise<Response>;
  delete({ routePath, body, context }: { routePath: string; body?: any; context?: any; }): Promise<Response>;
  update({ routePath, body, context }: { routePath: string; body?: any; context?: any; }): Promise<Response>;
  patch({ routePath, body, context }: { routePath: string; body?: any; context?: any; }): Promise<Response>;
}
