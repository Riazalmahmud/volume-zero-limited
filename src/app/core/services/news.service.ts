import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInterface } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
baseApi = 'https://volume-zero-limited-backend-qx8s8q83q-riaz-al-mahmuds-projects.vercel.app/'
  constructor(private http: HttpClient) { }


  createNews(data: NewsInterface):Observable<any> {
    return this.http.post<{data: any, status: boolean, message: string}>(this.baseApi + 'api/v1/news-post', data)
  }
  getNews():Observable<any> {
    return this.http.get<{data: any, status: boolean, message: string}>(this.baseApi + 'api/v1/news-post')
  }
}
