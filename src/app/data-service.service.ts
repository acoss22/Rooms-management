import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';


@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {
  loadedUsers = [];
  private REST_API_SERVER = "http://localhost:8000/api/users";
  private REST_API_SERVER2 = "https://gorest.co.in/public-api/users?_format=json&access-token=vvGn8lzeGIHlV4HTQBcz525P0o_ryWFaclYR";
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) { }



  public sendGetRequest(){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
  });
    return this.httpClient.get(this.REST_API_SERVER, this.options);
  }

  public sendGetRequest2(){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
  });
    return this.httpClient.get(this.REST_API_SERVER2, this.options);
  }



  ngOnInit() {
    this.fetchUsers();
    this.fetchExample();
  }

  onFetchUsers() {
    // Send Http request
    this.fetchUsers();
  }
  private fetchExample(){
    return this.httpClient.get(this.REST_API_SERVER2);
  }

  private fetchUsers() {
    return this.httpClient.get(this.REST_API_SERVER);
    
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
  }
}



