import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent} from './warning-alert/warning-alert.component';
import { HeaderComponent} from './header/header.component';
import { BuildingComponent } from './building/building.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingEditComponent } from './building-list/building.edit.component';
import { RoomItemComponent } from './room-list/room-item/room-item.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomEditComponent } from './room-list/room-item/room-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessAlertComponent, 
    WarningAlertComponent,
    HeaderComponent,
    //buildings
    BuildingComponent,
    BuildingDetailComponent,
    BuildingListComponent,
    BuildingEditComponent,
    //rooms
    RoomItemComponent, 
    RoomDetailComponent, 
    RoomEditComponent,
    RoomComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
