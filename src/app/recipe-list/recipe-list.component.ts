import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-criteria/search.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

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

}


