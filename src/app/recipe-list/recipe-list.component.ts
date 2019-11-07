import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-criteria/search.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipeResults: any[] = [];

  constructor(private searchService: SearchService) { }
    
  // handleSearch(searchValue: string): void {
  //   this.searchService
  //     .search(searchValue)
  //     .subscribe(response => {
  //       this.data = response["data"];
  //       console.log(this.data);
  //     });
  // }
  // clearResults() {
  //   this.data = [];
  // }

  // diet: string = ''; 

  search(searchValue: string): void {
    console.log(searchValue);
    this.searchService
      .fetchData(searchValue)
      // .then(searchValue = diet)
      .then((response:any[]) => {
        console.log(response);
        this.recipeResults = response;
      }, error => {
        console.log(`oops ${error}`);
      });
  }

}



