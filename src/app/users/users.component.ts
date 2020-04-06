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

  //constructor(private http: HttpClient) {}
  constructor(private dataService: DataService, private http: HttpClient) { }
  // ngOnInit() {
  //   this.fetchUsers();
  // }
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

  // onFetchUsers() {
  //   // Send Http request
  //   this.fetchUsers();
  // }


  // private fetchUsers() {
  //   return this.http.get(this.REST_API_SERVER);

    // let headers = new Headers();

    // this.http
    //   .get('http://localhost:8000/api/users', {})
    //   .pipe(
    //     map(responseData => {
    //       const usersArray = [];
    //       for (const key in responseData) {
    //         if (responseData.hasOwnProperty(key)) {
    //           usersArray.push({ ...responseData[key], id: key });
    //         }
    //       }
    //       return usersArray;
    //     })
    //   )
    //   .subscribe(users => {
    //     // ...
    //     console.log(users);
    //   });
  // }
}



