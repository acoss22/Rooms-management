import { Component, OnInit } from '@angular/core';
import { Room} from '../../shared/room.model';
 
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [
    new Room('Conference Room', 5),
    new Room('Working Room ', 10),
  ];



  constructor() {  console.log(this.rooms);  }

  ngOnInit() {
  
  }

  onRoomAdded(room: Room) {

    this.rooms.push(room);
}

  


}