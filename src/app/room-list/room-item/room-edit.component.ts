import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import { Room } from '../../../shared/room.model';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
  @ViewChild('idInput', { static: false }) idInputRef: ElementRef;
    @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
    @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
    @Output()  roomAdded = new EventEmitter<Room>();
  
    constructor() { }
  
    ngOnInit() {
    }
  
  
    onAddItem() {
      const roomID = this.idInputRef.nativeElement.value;
      const roomName = this.nameInputRef.nativeElement.value;
     
      const newRoom = new Room(roomID, roomName, 'aSS',0, 0, 'SDA', 0, 0, 'ASDAD');
      this.roomAdded.emit(newRoom);
    }
  
  }