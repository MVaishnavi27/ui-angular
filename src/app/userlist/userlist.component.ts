import { Component, OnInit } from '@angular/core';

import { UserserviceService } from '../userservice.service';

import { User } from '../user';

import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';



@Component({

  selector: 'app-userlist',

  templateUrl: './userlist.component.html',

  styleUrls: ['./userlist.component.css']

})



export class UserListComponent implements OnInit {

  isupdated: boolean;

  constructor(private router :Router,private userservice: UserserviceService) { }

  userList: Observable<User[]>;  
  ngOnInit() {

    this.userservice.getAllusers().subscribe(data => {

      this.userList = data;

    })

  }
  deleteUser(user: User) {  
    this.userservice.deleteUser(user.userid)  
      .subscribe(  
        data => {  
       console.log(data);
          this.userservice.getAllusers().subscribe(data =>{  
            this.userList =data})
          },

        error=>console.log(error));  
  }  
  updateUser(user: User) {

    window.localStorage.removeItem("update-userid");
    window.localStorage.setItem("update-userid", user.userid.toString());
    this.router.navigate(['register']);
   
    };
   
     userupdateform = new FormGroup({
    userid: new FormControl(),
    username: new FormControl(),
  
    password: new FormControl(),
  
    email: new FormControl(),
  
    mobile: new FormControl(),
  
    usertype: new FormControl(),
  
    confirmed: new FormControl(),
  
   });
  
  
   get Userid() {
  
  
  
    return this.userupdateform.get('userid');
  
  
  
   }
  
   get Username() {
  
  
  
    return this.userupdateform.get('username');
  
  
  
   }
  
  
  
   get Password() {
  
  
  
    return this.userupdateform.get('password');
  
  
  
   }
  
   get Email() {
  
    return this.userupdateform.get('email');
  
   }
  
   get Mobile() {
  
  
  
    return this.userupdateform.get('mobile');
  
  
  
   }
  
  
  
   get Usertype() {
  
  
  
    return this.userupdateform.get('usertype');
  
  
  
  
  
   }
  
   get Confirmed() {
  
    return this.userupdateform.get('confirmed');
  
   }
  
   changeisUpdate() {
  
    this.isupdated = false;
  
   }
 
  
}

