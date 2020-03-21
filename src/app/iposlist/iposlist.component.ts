import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IposerviceService } from '../iposervice.service';
import { Ipos } from '../ipos';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({

 selector: 'app-iposlist',
 templateUrl: './iposlist.component.html',
 styleUrls: ['./iposlist.component.css']
})
export class IposlistComponent implements OnInit {
 isupdated: boolean;

 constructor(private router:Router,private iposervice: IposerviceService) { }
 iposlist: Observable<Ipos[]>;
 ngOnInit() {
 this.iposervice.getAllIpos().subscribe(data => {
 this.iposlist = data;
 })
 }
 deleteIpos(ipos: Ipos) {  
    this.iposervice.deleteIpos(ipos.ipoid)  
      .subscribe(  
        data => {  
       console.log(data);
          this.iposervice.getAllIpos().subscribe(data =>{  
            this.iposlist =data})
          },

        error=>console.log(error));  
  }  
  updateIpos(ipos: Ipos) {

    window.localStorage.removeItem("update-ipoid");
    window.localStorage.setItem("update-ipoid", ipos.ipoid.toString());
    this.router.navigate(['ipos']);
    };
   
     iposupdateform = new FormGroup({
    companyname: new FormControl(),
    turnover: new FormControl(),
  
    ceoname: new FormControl(),
  
    bod: new FormControl(),
  
    listedinse: new FormControl(),
  
    sector: new FormControl(),
  
    remarks: new FormControl(),
    stockcode: new FormControl(),

  
   });
  
  
   get Ipoid() {
  
  
  
    return this.iposupdateform.get('ipoid');
  
  
  
   }
  
   get Companyname() {
  
  
  
    return this.iposupdateform.get('companyname');
  
  
  
   }
  
  
  
   get Stockexchange (){
  
  
  
    return this.iposupdateform.get('stockexchange');
  
  
  
   }
  
   get Pricepershare() {
  
    return this.iposupdateform.get('pricepershare');
  
   }
  
   get Totalnoofshares() {
  
  
  
    return this.iposupdateform.get('totalnoofshares');
  
  
  
   }
  
  
  
   get Opendatetime() {
  
  
  
    return this.iposupdateform.get('opendatetime');
  
  
  
  
  
   }
  
   get Remarks () {
  
    return this.iposupdateform.get('remarks');
  
   }
  
   changeisUpdate() {
  
    this.isupdated = false;
  
   }
 
  

}
