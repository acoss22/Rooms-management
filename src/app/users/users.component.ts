import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loadedUsers = [];
  private REST_API_SERVER = "http://localhost:8000/api/users";

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.loadedUsers = data;
      console.log(this.loadedUsers);
    }, (err: HttpErrorResponse) => {
      if (err instanceof Error) {
        console.log(err);
        //client side error
      } else {
        console.log('other error');
      }
    })
    
  }
}



