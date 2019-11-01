import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  fetchData(recipes: string) {

    return this.http.get(`https://api.edamam.com/search`);
  }

  // keyword: string = '';
  // dietLabel: boolean = false;

  // const params = new HttpParams()
  //   .set('app_key', '30748527d5cb18fb40c29a614c16c1d1')
  //   .set('app_id', 'f525747a')
  //   .set('q', '')
  //   .set()
}
