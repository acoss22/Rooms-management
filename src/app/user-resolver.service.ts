import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable} from 'rxjs/Observable';

import { DataService } from './data-service.service';


interface UserI{
  id: number;
  full_name: string;
}


@Injectable()
export class UserResolverService implements Resolve<UserI> {

  constructor(private userService: DataService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserI> | Promise<UserI> | UserI {

    return this.userService.sendGetRequestbyID(+route.params['id']);
  }

}
