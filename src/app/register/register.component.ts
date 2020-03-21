import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedFiles: any;
  constructor(private userservice:UserserviceService) { }  
  user : User=new User();  
  submitted = false;  
  ngOnInit() {



    var  userid=window.localStorage.getItem("update-userid");
    if(userid!=null && userid!="")
    {
 
    this.userservice.findOneInAll1(parseInt(userid)) 
    .subscribe(
      data => {
      this.user =data;
      this.usersaveform.setValue(this.user);
 
      }) ;
 
    this.submitted = false;
 
     }}
     selectFile(event) {

      const file = event.target.files.item(0);
  
  
  
      if (file.type.match('image.*')) {
  
       var size = event.target.files[0].size;
  
       if(size > 1000000)
  
       {
  
         alert("size must not exceeds 1 MB");
  
         this.usersaveform.get('profileimage').setValue("");
  
       }
  
       else
  
       {
  
        this.selectedFiles = event.target.files;
  
       }
  
      } else {
  
       alert('invalid format!');
  
      }
  
  
  
     }   
  usersaveform=new FormGroup({ 
    userid:new FormControl('' , [Validators.required , Validators.minLength(3) ] ), 
    username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    usertype:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),   
    email:new FormControl('',[Validators.required,Validators.email]),  
    mobile:new FormControl()  ,  
    confirmed:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    profileimage:new FormControl()  
  });  
  
  saveUser(saveUser){
  
    
    this.user=new User();     
    this.user.userid=this.Userid.value; 
    this.user.username=this.Username.value;  
    this.user.password=this.Password.value; 
    this.user.usertype=this.Usertype.value;  
    this.user.email=this.Email.value;
    this.user.mobile=this.Mobile.value;
    this.user.confirmed=this.Confirmed.value; 
    this.user.profileimage=this.Profileimage.value; 


    this.submitted = true;  
    this.save();  
  } 

  
    
  
  save() {  
    this.userservice.saveUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User(); 
    window.localStorage.removeItem("update-userid") 
  }  
  get Userid(){  
    return this.usersaveform.get('userid');  
  }  
  get Username(){  
    return this.usersaveform.get('username');  
  }  
  
  get Password(){  
    return this.usersaveform.get('password');  
  }  
  get Usertype(){  
    return this.usersaveform.get('usertype');  
  }  
  get Email(){  
    return this.usersaveform.get('email');  
  }  
  
  get Mobile(){  
    return this.usersaveform.get('mobile');  
  }  
  get Confirmed(){  
    return this.usersaveform.get('confirmed');  
  }  
  get Profileimage(){  
    return this.usersaveform.get('profileimage');  
  }  
  
 
  saveUserForm(){  
    this.submitted=false;  
    this.usersaveform.reset();  
  }  
}
