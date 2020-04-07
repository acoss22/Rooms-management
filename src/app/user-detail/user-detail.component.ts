import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data-service.service';
import { User } from 'src/shared/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
  user: User;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private data: DataService) { }

 
  ngOnInit(){
    this.user = new User();
     this.data.sendGetRequestbyID(this.route.snapshot.params.id).subscribe((data: any[]) => {
      console.log(data);
      this.user = data[0];
      console.log(this.user);
     }
    
    );
  }
}