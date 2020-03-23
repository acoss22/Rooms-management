import { Injectable, EventEmitter } from '@angular/core';
import { Building } from '../../shared/building.model';
import { Room } from '../../shared/room.model';
import { RoomService } from '../services/room.service';

export class BuildingService {
  selectedBuilding = new EventEmitter<Building>();

  private buildings: Building[] = [
    new Building('blockA', 'desc1', 'imge'),
    new Building('blocvvvvvvvb', 'desc1', 'imge')
  ];

   

  getBuildings() {
    return this.buildings.slice();
  }

  // addRoomToBuilding(rooms: Room[]) {
  //   this.roomService.addRooms(rooms);
  // }


}
