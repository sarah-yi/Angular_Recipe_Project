import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  fetchData(searchValue: string) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ce43d527cc7e4ccfa9240b8aa9a78bd7&query=${searchValue}`;
    return this.http.get(url).toPromise().then((response:any) => {
      const ids = response.results.map(item => item.id);
      return this.http.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=ce43d527cc7e4ccfa9240b8aa9a78bd7&ids=${ids.join(',')}`).toPromise()
    });
  }


  // keyword: string = '';
  // dietLabel: boolean = false;

  // const params = new HttpParams()

  //   .set('app_key', '30748527d5cb18fb40c29a614c16c1d1')
  //   .set('app_id', 'f525747a')
  //   .set('q', '');
  //   // .set()

  //   console.log(params.toString());
}

