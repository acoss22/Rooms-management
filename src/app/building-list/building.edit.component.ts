import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, Inject, Injectable } from '@angular/core';
import { Room } from '../../shared/room.model';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Building } from 'src/shared/building.model';
import { NgModule } from '@angular/core';
import { StorageServiceModule, LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@NgModule({
  imports: [StorageServiceModule]
})

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html'
})

@Injectable()
export class BuildingEditComponent implements OnInit {
  // key that is used to access the data in local storageconst 
  STORAGE_KEY = 'local_todolist';
  @ViewChild('f', { static: false }) buildingForm: NgForm;
  buildingList = [];
  generatedID: number = 1;
  building: Building = new Building(this.generatedID, '', '', '');

  submitted = false;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {
  }


  onSubmit() {
    console.log("object submitted");

    this.submitted = true;

    let currentBuilding = this.buildingForm.value;


    let currentBuildingName = currentBuilding['ngModelGroup'].buildingName;
    let currentBuildingDescription = currentBuilding['ngModelGroup'].buildingDescription;
    let currentBuildingImagePath = '';

    this.building.id = this.generatedID++;
    this.building.name = currentBuildingName;
    this.building.description = currentBuildingDescription;
    this.building.imagePath = currentBuildingImagePath;

    console.log(this.building);
    this.storeOnLocalStorage(this.building);
    this.buildingForm.reset();


  }

  public storeOnLocalStorage(currentBuilding: Building): void {

    // get array of tasks from local storage
    this.buildingList = this.storage.get(this.STORAGE_KEY) || [];
    // push new task to array
    this.buildingList.push({
      currentBuilding
    });

    // insert updated array to local storage
    this.storage.set(this.STORAGE_KEY, this.buildingList);
  
    console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
  }
}



