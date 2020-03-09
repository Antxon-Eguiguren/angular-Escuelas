import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users';
  }

  registro(formValues): Promise<any> {
    const body = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    };
    return this.httpClient.post(`${this.baseUrl}/register`, body).toPromise();
  }

  login(formValues): Promise<any> {
    const body = {
      email: formValues.email,
      password: formValues.password
    };
    return this.httpClient.post(`${this.baseUrl}/login`, body).toPromise();
  }

}
