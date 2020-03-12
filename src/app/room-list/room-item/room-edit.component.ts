import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import { Room } from '../../../shared/room.model';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

    @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
    @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
    @Output()  roomAdded = new EventEmitter<Room>();
  
    constructor() { }
  
    ngOnInit() {
    }
  
  
    onAddItem() {
      const roomName = this.nameInputRef.nativeElement.value;
      const roomAmount = this.amountInputRef.nativeElement.value;
      const newRoom = new Room(roomName, roomAmount);
      this.roomAdded.emit(newRoom);
    }
  
  }