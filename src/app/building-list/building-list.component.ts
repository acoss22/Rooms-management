import { Component, OnInit } from '@angular/core';
import { Building } from '../../shared/building.model';

@Component({
    selector: 'app-building-list',
    templateUrl: 'building-list.component.html'
 
})

export class BuildingListComponent implements OnInit {
  buildings : Building[] = [
      new Building('BlockA', 'BlockA', 'blockA.jpg'),
      new Building('BlockB', 'BlockB', 'blockB.jpg'),
      new Building('BlockC', 'BlockC', 'blockC.jpg')
  ];

    constructor() { }

    ngOnInit() { }
}
