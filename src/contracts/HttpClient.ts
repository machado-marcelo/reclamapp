import { Response } from './Response';

export interface HttpClient {
  baseUrl: string;
  timeoutInMilliseconds: number;
  handleRequest({
    requestType,
    routePath,
    context,
    body,
  }: {
    requestType: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    routePath: string;
    context?: any;
    body?: any;
  }): Promise<Response>;
}
