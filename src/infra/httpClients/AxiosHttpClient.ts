import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

import { HttpClient } from '../../contracts/HttpClient';
import { MAIN_API_BASIC_TOKEN } from '@env';
import { Response } from '../../contracts/Response';

export class AxiosHttpClient implements HttpClient {

  public baseUrl: string;
  public timeoutInMilliseconds: number;
  public axiosInstance: AxiosInstance;

  constructor({
    baseUrl,
    timeoutInMilliseconds,
  }: {
    baseUrl: string;
    timeoutInMilliseconds: number;
  }) {
    this.baseUrl = baseUrl;
    this.timeoutInMilliseconds = timeoutInMilliseconds;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeoutInMilliseconds,
    });
  }

  private configRequest(
    axiosRequestConfig: AxiosRequestConfig,
    headers: any
  ): AxiosRequestConfig {

    axiosRequestConfig.headers.Basic = MAIN_API_BASIC_TOKEN;

    if (headers.authorization) {
      axiosRequestConfig.headers.Authorization = `${headers.authorization}`;
    }

    return axiosRequestConfig;
  }

  async handleRequest({
    requestType,
    routePath,
    context,
    body,
  }: {
    requestType: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    routePath: string;
    context?: any;
    body?: any;
  }): Promise<Response> {

   /// VER AINDA DE ONDE VOU PEGAR OS DADOS NO REACT NATIVE
    const authorization = ""

    this.axiosInstance.interceptors.request.use(
      (axiosRequestConfig) =>
        this.configRequest(axiosRequestConfig, { authorization }),
      (error) => Promise.reject(error)
    );

    let finalResponse = {
      hasError: true,
      data: null,
      headers: null,
      statusCode: 503
    };

    await this.axiosInstance.request({
      method: requestType,
      url: routePath,
      data: body,
    }).then((response) => {

      finalResponse = {
        hasError: false,
        data: response.data,
        headers: response.headers,
        statusCode: response.status,
      };

    }).catch((error: AxiosError) => {

      finalResponse = {
        hasError: true,
        data: error.response?.data,
        headers: error.response?.headers,
        statusCode: error.response?.status || 503,
      };

    });

    return finalResponse;

  }

}
