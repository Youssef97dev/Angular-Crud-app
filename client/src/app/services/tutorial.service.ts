import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseURL = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseURL);
  }

  getOne(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseURL}/single/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseURL}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/update/${id}`, data);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseURL}/deleteAll`);
  }

  deleteOne(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/delete/${id}`);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseURL}?title=${title}`);
  }
}
