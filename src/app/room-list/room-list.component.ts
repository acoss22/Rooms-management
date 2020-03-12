import { Component, OnInit } from '@angular/core';
import { Room} from './room.model';
 
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [
    new Room('Apples', 5),
    new Room('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

}