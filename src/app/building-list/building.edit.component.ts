import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html'
})
export class BuildingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef : ElementRef;
@ViewChild('amountInput') amountInputRef : ElementRef;
roomAdded = new EventEmitter<{name:string, amount: number}>();
  
constructor() { }

  ngOnInit() {
  }


  onAddItem(){


  }

}
