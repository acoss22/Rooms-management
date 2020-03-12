import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Room } from '../room-list/room.model';
@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html'
})
export class BuildingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output()  buildingAdded = new EventEmitter<Room>();

  constructor() { }

  ngOnInit() {
  }


  onAddItem() {
    const roomName = this.nameInputRef.nativeElement.value;
    const roomAmount = this.amountInputRef.nativeElement.value;
    const newBuilding = new Room(roomName, roomAmount);
    this.buildingAdded.emit(newBuilding);
  }

}
