import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Room } from '../../shared/room.model';
@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html'
})
export class BuildingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('descriptionInput', { static: false }) descriptionInputRef: ElementRef;
  @Output()  buildingAdded = new EventEmitter<Room>();

  constructor() { }

  ngOnInit() {
  }


  onAddItem() {
    const roomName = this.nameInputRef.nativeElement.value;
    const roomDescription = this.descriptionInputRef.nativeElement.value;
    const newBuilding = new Room(roomName, roomDescription);
    this.buildingAdded.emit(newBuilding);
  }

}
