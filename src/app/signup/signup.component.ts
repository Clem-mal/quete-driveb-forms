import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
model: User = new User("","","","")


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.model);
  }



}
