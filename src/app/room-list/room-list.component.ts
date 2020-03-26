import { Component, OnInit } from '@angular/core';
import { Room} from '../../shared/room.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [
    new Room(1, 'Conference Room', 5),
    new Room(2, 'Working Room ', 10),
  ];


  selectedRoom: Room;

  room: { id: number, name: string }
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router : Router) { }


  ngOnInit() {
    this.room = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
      this.room.id = params['id'];
      this.room.name = params['name'];
    });
  }
    ngOnDestroy() {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.paramsSubscription.unsubscribe();
    }
  
    onDetail(){
      this.router.navigate(['detail']);
    }


  onRoomAdded(room: Room) {

    this.rooms.push(room);
}

  


}