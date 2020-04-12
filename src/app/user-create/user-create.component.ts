import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DataService } from "../data-service.service";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {


  profileForm: FormGroup;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      'userData': new FormGroup({
        'fullName': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(''),
        'phone_number': new FormControl(''),
        'department': new FormControl(''),
        'role': new FormControl(''),
      })
    });

    // this.profileForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
  }

  onSubmit() {
    let data = this.profileForm.value.userData;
    console.log(data);
    console.log(this.profileForm);

    this.dataService.sendPostRequest(data).subscribe((data: any[]) => {
      console.log(data);
    }, (err: HttpErrorResponse) => {
      if (err instanceof Error) {
        console.log(err);
        //client side error
      } else {
        console.log('other error');
      }
    })
    
    this.profileForm.reset();

  }

}

