import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Users } from '@app/_models/users';

const baseUrl = `${environment.apiUrl}`;

const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }),
  };

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${baseUrl}/users`, httpOptions);
    }

    create(params: any) {
        return this.http.post(`${baseUrl}/add-user`, params, httpOptions);
    }

    update(params: Users) {
        return this.http.put(`${baseUrl}/update-user`, params, httpOptions);
    }
}