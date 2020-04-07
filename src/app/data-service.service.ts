import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {
  loadedUsers = [];
  private REST_API_SERVER = "http://localhost:8000/api/users";
  //private REST_API_SERVER2 = "https://gorest.co.in/public-api/users?_format=json&access-token=vvGn8lzeGIHlV4HTQBcz525P0o_ryWFaclYR";
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUsersFromRequest();
  }


  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER, this.headers);
  }

  public sendGetRequestbyID(id: number) : any {
    return this.httpClient.get(this.REST_API_SERVER + '/' + id, this.headers);


  }



  public getUsersFromRequest() {
    this.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.loadedUsers = data;
      console.log("THIS LOADED USERS NO DATA SERVICE" + this.loadedUsers);
    }, (err: HttpErrorResponse) => {
      if (err instanceof Error) {
        console.log(err);
        //client side error
      } else {
        console.log('other error');
      }
    })

  }


  // public sendGetRequestbyID(id: number) {

  //   console.log(id);

  //   const user = this.loadedUsers.find(
  //     (s) => {
  //       return s.id === id;
  //     });
  //   console.log(user)
  //   return user;
  // }

}





