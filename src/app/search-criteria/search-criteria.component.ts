import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent {
  @Output() onSearch = new EventEmitter<any>();

  placeholder: string = "e.g. soup, salad, pizza";

  constructor() { }

  handleSubmit(form: NgForm): void {
    this.onSearch.emit(form.value.query);
    form.reset();
  }

}
