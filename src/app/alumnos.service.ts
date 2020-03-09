import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/students';
  }

  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.baseUrl, httpOptions).toPromise();
  }

  getById(pAlumnoId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        user_token: localStorage.getItem('token')
      })
    };
    return this.httpClient.get(`${this.baseUrl}/${pAlumnoId}`, httpOptions).toPromise();
  }

  add(pAlumno): Promise<any> {
    return this.httpClient.post(this.baseUrl, pAlumno).toPromise();
  }

  delete(pAlumnoId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: pAlumnoId
      }
    };
    return this.httpClient.delete(this.baseUrl, httpOptions).toPromise();
  }

}
