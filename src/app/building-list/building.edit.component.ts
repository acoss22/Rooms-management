import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Room } from '../../shared/room.model';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Building } from 'src/shared/building.model';


@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html'
})
export class BuildingEditComponent implements OnInit {

  @ViewChild('f', {static: false}) buildingForm: NgForm;
  

  generatedID : number = 1;

  building : Building = new Building(this.generatedID,'','','');


submitted = false;

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    console.log("object submitted");

    this.submitted=true;
  
    let currentBuilding = this.buildingForm.value;

    console.log(typeof currentBuilding);
    console.log(JSON.stringify(currentBuilding));
    let currentBuildingName = currentBuilding['ngModelGroup'].buildingName;
    console.log(currentBuildingName);

    this.building.name = currentBuildingName;
    this.building.description = this.buildingForm.value.buildingDescription;
    this.building.imagePath = this.buildingForm.value.imagePath;
    this.buildingForm.reset();
   // console.log(this.building);

  }

}
