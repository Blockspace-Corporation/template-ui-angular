import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import {
  Auth as AuthModel,
  AuthResponse as AuthResponseModel
} from '../../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:3000/api/auth';

  async login(data: AuthModel): Promise<AuthResponseModel> {
    const endpoint = `${this.apiUrl}/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const payload = JSON.stringify(data);

    return await firstValueFrom(
      this.http.post<AuthResponseModel>(endpoint, payload, { headers })
    );
  }
}
