import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyserviceService } from '../companyservice.service';
import { Companydata } from '../companydata';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  
  isupdated: boolean;

  constructor(private router :Router,private companyservice: CompanyserviceService) { }

  companyList: Observable<Companydata[]>;  
  ngOnInit() {

    this.companyservice.getAllCompanyData().subscribe(data => {

      this.companyList = data;

    })

  }
  deleteCompanyData(companydata: Companydata) {  
    this.companyservice.deleteCompanyData(companydata.companyname)  
      .subscribe(  
        data => {  
       console.log(data);
          this.companyservice.getAllCompanyData().subscribe(data =>{  
            this.companyList =data})
          },

        error=>console.log(error));  
  }  
  updateCompanyData(companydata: Companydata) {

    window.localStorage.removeItem("update-companyname");
    window.localStorage.setItem("update-companyname", companydata.companyname.toString());
    this.router.navigate(['companydata']);
    };
   
     companyupdateform = new FormGroup({
    companyname: new FormControl(),
    turnover: new FormControl(),
  
    ceoname: new FormControl(),
  
    bod: new FormControl(),
  
    listedinse: new FormControl(),
  
    sector: new FormControl(),
  
    remarks: new FormControl(),
    stockcode: new FormControl(),

  
   });
  
  
   get Companyname() {
  
  
  
    return this.companyupdateform.get('companyname');
  
  
    
   }
  
   get Turnover() {
  
  
  
    return this.companyupdateform.get('turnover');
  
  
  
   }
  
  
  
   get Ceoname (){
  
  
  
    return this.companyupdateform.get('ceoname');
  
  
  
   }
  
   get Bod() {
  
    return this.companyupdateform.get('bod');
  
   }
  
   get Listedinse() {
  
  
  
    return this.companyupdateform.get('listedinse');
  
  
  
   }
  
  
  
   get Sector() {
  
  
  
    return this.companyupdateform.get('sector');
  
  
  
  
  
   }
  
   get Remarks () {
  
    return this.companyupdateform.get('remarks');
  
   }
  
   changeisUpdate() {
  
    this.isupdated = false;
  
   }
 
  

}

 