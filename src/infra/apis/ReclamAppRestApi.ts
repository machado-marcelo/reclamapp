import { AxiosHttpClient } from '../httpClients/AxiosHttpClient';
import { HttpClient } from '../../contracts/HttpClient';
import { MAIN_API_BASE_URL } from '@env';
import { Response } from '../../contracts/Response';
import { RestApi } from '../../contracts/RestApi';

export class ReclamAppRestApi implements RestApi {

  httpClient: HttpClient;

  constructor() {

    this.httpClient = new AxiosHttpClient({
      baseUrl: MAIN_API_BASE_URL,
      timeoutInMilliseconds: 60000,
    });
  }

  async post({
    routePath,
    body,
    context,
  }: {
    routePath: string;
    body?: any;
    context?: any;
  }): Promise<Response> {
    return await this.httpClient.handleRequest({
      context,
      routePath,
      requestType: 'POST',
      body
    });
  }

  async delete({
    routePath,
    body,
    context,
  }: {
    routePath: string;
    body?: any;
    context?: any;
  }): Promise<Response> {
    return await this.httpClient.handleRequest({
      context,
      routePath,
      requestType: 'DELETE',
      body,
    });
  }

  async update({
    routePath,
    body,
    context,
  }: {
    routePath: string;
    body?: any;
    context?: any;
  }): Promise<Response> {
    return await this.httpClient.handleRequest({
      context,
      routePath,
      requestType: 'PUT',
      body,
    });
  }

  async patch({
    routePath,
    body,
    context,
  }: {
    routePath: string;
    body?: any;
    context?: any;
  }): Promise<Response> {
    return await this.httpClient.handleRequest({
      context,
      routePath,
      requestType: 'PATCH',
      body,
    });
  }

  async get({
    routePath,
    context,
  }: {
    routePath: string;
    context?: any;
  }): Promise<Response> {
    return await this.httpClient.handleRequest({
      context,
      routePath,
      requestType: 'GET',
    });
  }

}
