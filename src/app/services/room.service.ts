import { Injectable, EventEmitter } from '@angular/core';
import { Room } from '../../shared/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomsChanged = new EventEmitter<Room[]>();
  private rooms: Room[] = [
    new Room(1, 'Meeting', 5),
    new Room(2, 'Servers', 10),
  ];

  constructor() { }
  getRoom(){
    return this.rooms.slice();
  }

  addRoom(room: Room) {
    this.rooms.push(room);
    this.roomsChanged.emit(this.rooms.slice());
  }

  addRooms(room: Room[]) {
    this.rooms.push(...this.rooms);
    this.roomsChanged.emit(this.rooms.slice());

  }


}
