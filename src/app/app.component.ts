import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

import { SearchService } from './search-criteria/search.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  panelOpenState = false;
  searchValue: string = '';
  accordionList:any;
 
  @ViewChild('accordion',{static:true}) Accordion: MatAccordion


  formatLabel(value:number) {
    if (value >= 2001) {
      return Math.round(value / 2001) + 'k';
    }

    return value;
  }
 
  constructor(private searchService: SearchService) {
    this.accordionList = [
      {
        id:"panel-1",
        title:"Panel One",
        description:"Description One",
        isDisabled:false,
        isExpanded:false
      },{
        id:"panel-2",
        title:"Panel Two (Disabled)",
        description:"Description Two",
        isDisabled:true,
        isExpanded:false
      },{
        id:"panel-3",
        title:"Panel Three",
        description:"Description Three",
        isDisabled:false,
        isExpanded:true
      },
    ]
   }

  //  public fetchData() {
  //    this.searchService.fetchData(this.searchValue)
  //    .subscribe((response) =>  {this.params=response;}
  //    );
  //  }
 
  ngOnInit() {
  }
 
  beforePanelClosed(panel){
    panel.isExpanded = false;
    console.log("Panel going to close!");
  }
  beforePanelOpened(panel){
    panel.isExpanded = true;
    console.log("Panel going to  open!");
  }
 
  afterPanelClosed(){
    console.log("Panel closed!");
  }
  afterPanelOpened(){
    console.log("Panel opened!");
  }
 
 
  closeAllPanels(){
    this.Accordion.closeAll();
  }
  openAllPanels(){
    this.Accordion.openAll();
  }
}
