import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInterface } from '../models/news.model';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
baseApi = 'https://volume-zero-limited-backend-api.vercel.app/'
  constructor(private http: HttpClient) { }


  createNews(data: NewsInterface):Observable<any> {
    return this.http.post<{data: any, status: boolean, message: string}>(this.baseApi + 'api/v1/news-post', data)
  }
  getNews():Observable<any> {
    return this.http.get<{data: any, status: boolean, message: string}>(this.baseApi + 'api/v1/news-post')
  }
  updateNews(id: string, data: NewsInterface):Observable<any> {
    return this.http.put<{data: any, status: boolean, message: string}>(this.baseApi + `api/v1/news-post/${id}`, data)
  }
  deleteNews(id: string):Observable<any> {
    return this.http.delete<{data: any, status: boolean, message: string}>(this.baseApi + `api/v1/news-post/${id}`)
  }
}
