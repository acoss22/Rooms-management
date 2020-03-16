import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Building } from '../../shared/building.model';




const apiUrl = "/api/buildings";
const  httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export class BuildingService {
  selectedBuilding = new EventEmitter<Building>();

  private buildings: Building[] =[
new Building('blockA', 'desc1', 'imge'), 
new Building('blockAvvvvvvvvvvvvvvvvvvvvvvvb', 'desc1', 'imge') 
];


getBuildings(){
  return this.buildings.slice();
}
  // constructor(private http: HttpClient) {
    
  //  }

  //  private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // getProducts (): Observable<Building[]> {
  //   return this.http.get<Building[]>(apiUrl)
  //     .pipe(
  //       tap(heroes => console.log('fetched products')),
  //       catchError(this.handleError('getProducts', []))
  //     );
  // }


}
