import { Component, OnInit } from '@angular/core';
import { Building } from '../../shared/building.model';
import { BuildingService } from '../services/building.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
  providers: [BuildingService]
})
export class BuildingComponent implements OnInit {
  selectedBuilding: Building;

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.buildingService.selectedBuilding.subscribe(
      (building: Building) => {
        this.selectedBuilding = building;
      }
    );
  }
}
