import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-criteria/search.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private searchService: SearchService) { }
    
  search() {

  }

  ngOnInit() {
  }

}
