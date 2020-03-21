import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  constructor(private router: Router, private userservice: UserserviceService) { }
  user: User = new User();
  submitted = false;
  ngOnInit() {
    this.submitted = false;
  }
  usersaveform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  get Username() {
    return this.usersaveform.get('username');
  }

  get Password() {
    return this.usersaveform.get('password');
  }
  findByUsernameAndPassword(findByUsernameAndPassword) {
    this.user = new User();
    this.user.username = this.Username.value;
    this.user.password = this.Password.value;
   // this.submitted = true;
    this.userservice.findByUsernameAndPassword(this.user.username, this.user.password)
      .subscribe(data => {
        this.user = data;
        if (this.user != null && this.user.usertype == 'admin') {
          alert("admin");
          this.router.navigate(['adminlanding']);
        }
        else if (this.user != null && this.user.usertype == 'user') {
          alert("user");
          this.router.navigate(['userlanding']);
        }
        else {
            alert("invalid")
          this.router.navigate(['login']);
        }
      },
        error => console.log(console.error()));
  }
}