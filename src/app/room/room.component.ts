import { Component, OnInit } from '@angular/core';
import { Room } from '../../shared/room.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  selectedRoom: Room;


  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
   
  }
    ngOnDestroy() {
     
    }
  
    onDetail(){
    
    }

}
