import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './building/building.component';
import { BuildingListComponent} from './building-list/building-list.component';
import { BuildingDetailComponent} from './building-detail/building-detail.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  routes: Routes = [
    { path: 'building', component: BuildingComponent },
    { path: 'buildingList', component: BuildingListComponent  },
    { path: 'buildingDetail', component: BuildingDetailComponent }
  ];
}


