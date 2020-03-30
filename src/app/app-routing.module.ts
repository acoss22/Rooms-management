import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './building/building.component';
import { BuildingListComponent} from './building-list/building-list.component';
import { BuildingDetailComponent} from './building-detail/building-detail.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { ServerComponent } from './server/server.component';
import { BuildingEditComponent } from './building-list/building.edit.component';

const appRoutes : Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'buildings', component: BuildingComponent, pathMatch: 'full'},
  { path: 'rooms', component: RoomComponent, children: [
    { path: 'rooms/:id', component: RoomComponent}
  ]},
  { path: 'rooms/:id', component: RoomComponent},
  { path: 'servers ', component: ServerComponent},
  { path: 'buildings/:id', component: BuildingComponent},
  { path: 'buildings/:id/edit', component: BuildingEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})




export class AppRoutingModule { 



}


