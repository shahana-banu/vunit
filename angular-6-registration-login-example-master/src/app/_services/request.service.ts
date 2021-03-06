import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Request } from '../_models';

@Injectable()
export class RequestService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Request[]>(`${config.apiUrl}/requests`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/requests/` + id);
    }

    create(request: Request) {
        return this.http.post(`${config.apiUrl}/requests/create`, request);
    }
    upload(file: File) {
        return this.http.post(`${config.apiUrl}/_helpers/upload`, file);
    }

    update(request: Request) {
        return this.http.put(`${config.apiUrl}/requests/` + request.id, request);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/requests/` + id);
    }
}