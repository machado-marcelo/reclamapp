import { DataAccess } from '../contracts/DataAcccess';
import { ReclamAppRestApi } from '../infra/apis/ReclamAppRestApi';
import { Response } from '../contracts/Response';
import { RestApi } from '../contracts/RestApi';

export class AuthDataAccess implements DataAccess {

  restApi: RestApi;

  constructor() {
    this.restApi = new ReclamAppRestApi();
  }
  
  async signIn({email, password}: { 
      email: string,
      password: string
  }): Promise<Response> {
    const routePath = '/auth/authenticate';
    return await this.restApi.post({
      routePath, body: {
      email, password
    } });
  }

}
