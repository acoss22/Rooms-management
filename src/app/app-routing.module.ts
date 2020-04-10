import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './building/building.component';
import { BuildingListComponent} from './building-list/building-list.component';
import { BuildingDetailComponent} from './building-detail/building-detail.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { ServerComponent } from './server/server.component';
import { BuildingEditComponent } from './building-list/building.edit.component';
import { UsersComponent} from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserResolverService} from '../app/user-resolver.service';
import { UserCreateComponent } from './user-create/user-create.component';
 
const appRoutes : Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'buildings', component: BuildingComponent, pathMatch: 'full'},
  { path: 'rooms', component: RoomComponent, children: [
    { path: 'rooms/:id', component: RoomComponent}
  ]},
  { path: 'servers ', component: ServerComponent},
  { path: 'buildings/:id', component: BuildingComponent},
  { path: 'buildings/:id/edit', component: BuildingEditComponent},
  { path: 'users', component: UsersComponent , children: [
  {path: ':id' , component: UserDetailComponent, resolve: {user: UserResolverService}}
  ]},
  { path: 'usercreate', component: UserCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})




export class AppRoutingModule { 



}


