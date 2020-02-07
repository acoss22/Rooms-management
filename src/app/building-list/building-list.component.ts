import { Component, OnInit } from '@angular/core';
import { Building } from './building.model';

@Component({
    selector: 'app-building-list',
    templateUrl: 'building-list.component.html'
 
})

export class NameComponent implements OnInit {
  buildings : Building[] = [
      new Building('BlockA', 'BlockA', 'blockA.jpg')
  ];

    constructor() { }

    ngOnInit() { }
}
