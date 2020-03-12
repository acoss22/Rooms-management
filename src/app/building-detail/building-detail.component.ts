import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../building/building.model';


@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {
  @Input() building: Building;


  constructor() { 
  
  }

  ngOnInit() {
  }

}
