import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  fetchData(searchValue: string) {
    const url = "https://api.edamam.com/search";
    return this.http.get<any[]>(url + '');
  }


  keyword: string = '';
  dietLabel: boolean = false;

  // const params = new HttpParams()
  //   .set('app_key', '30748527d5cb18fb40c29a614c16c1d1')
  //   .set('app_id', 'f525747a')
  //   .set('q', '');
    // .set()

    // console.log(params.toString());
}

