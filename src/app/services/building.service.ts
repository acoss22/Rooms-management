import { Injectable, EventEmitter } from '@angular/core';
import { Building } from '../../shared/building.model';
import { Room } from '../../shared/room.model';
import { RoomService } from '../services/room.service';

export class BuildingService {
  selectedBuilding = new EventEmitter<Building>();

  private buildings: Building[] = [
    new Building(1, 'blockA', 'desc1', 'imge', false),
    new Building(2, 'blocvvvvvvvb', 'desc1', 'imge', false)
  ];

   

  getBuildings() {
    return this.buildings.slice();
  }

  // addRoomToBuilding(rooms: Room[]) {
  //   this.roomService.addRooms(rooms);
  // }


}
