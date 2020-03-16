import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Building } from '../../shared/building.model';
import { BuildingService} from '../services/building.service';

@Component({ 
    selector: 'app-building-list',
    templateUrl: 'building-list.component.html'

})

export class BuildingListComponent implements OnInit {
  
    @Output() buildingWasSelected = new EventEmitter<Building>();
    buildings: Building[];

    constructor(private buildingService : BuildingService) { }

    ngOnInit() {
        this.buildings = this.buildingService.getBuildings();
     }

    onBuildingAdded(building: Building) {
        this.buildingWasSelected.emit(building);
    }

}
