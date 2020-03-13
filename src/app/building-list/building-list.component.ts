import { Component, OnInit } from '@angular/core';
import { Building } from '../../shared/building.model';

@Component({
    selector: 'app-building-list',
    templateUrl: 'building-list.component.html'

})

export class BuildingListComponent implements OnInit {
    buildings: Building[] = [
        new Building('BlockA', 'BlockA', 'assets/images/blockA.png'),
        new Building('BlockB', 'BlockB', 'assets/images/blockA.png'),
        new Building('BlockC', 'BlockC', 'assets/images/blockA.png')
    ];

    constructor() { }

    ngOnInit() { }

    onBuildingAdded(building: Building) {
        this.buildings.push(building);
    }

}
