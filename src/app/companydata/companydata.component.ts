import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from '../companyservice.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Companydata} from '../companydata';

@Component({
  selector: 'app-companydata',
  templateUrl: './companydata.component.html',
  styleUrls: ['./companydata.component.css']
})
export class CompanydataComponent implements OnInit {
  constructor(private companyservice:CompanyserviceService) { }  
  companydata : Companydata=new Companydata();  
  submitted = false;  
  ngOnInit() {
    var  companyname=window.localStorage.getItem("update-companyname");
    if(companyname!=null && companyname!="")
    {
    this.companyservice.findOneInAll6(companyname)
    .subscribe(
      data => {
      this.companydata =data;
      this.companysaveform.setValue(this.companydata);
 
      }) ;
 
    this.submitted = false;
 
   } }

  companysaveform=new FormGroup({ 
    companyname:new FormControl('' , [Validators.required , Validators.minLength(3) ] ), 
    turnover:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    ceoname:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    bod:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),   
    listedinse:new FormControl('',[Validators.required,Validators.minLength(1)]),  
    sector:new FormControl()  ,
    remarks:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    stockcode:new FormControl('' , [Validators.required , Validators.minLength(1) ] )
  });  
  
  saveCompanydata(saveCompanydata){ 
    if(this.companysaveform.invalid)
    {
      alert("Invalid form");
    }  
    else{ 
    this.companydata=new Companydata();     
    this.companydata.companyname=this.Companyname.value; 
    this.companydata.turnover=this.Turnover.value;  
    this.companydata.ceoname=this.Ceoname.value; 
    this.companydata.bod=this.Bod.value;  
    this.companydata.listedinse=this.Listedinse.value;
    this.companydata.sector=this.Sector.value;
    this.companydata.remarks=this.Remarks.value; 
    this.companydata.stockcode=this.Stockcode.value;  
    this.submitted = true;  
    this.save();  
  }  }
  
    
  
  save() {  
    this.companyservice.saveCompanyData(this.companydata)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.companydata = new Companydata();  
    window.localStorage.removeItem("update-companyname")
  }  
  get Companyname(){  
    return this.companysaveform.get('companyname');  
  }  
  get Turnover(){  
    return this.companysaveform.get('turnover');  
  }  
  
  get Ceoname(){  
    return this.companysaveform.get('ceoname');  
  }  
  get Bod(){  
    return this.companysaveform.get('bod');  
  }  
  get Listedinse(){  
    return this.companysaveform.get('listedinse');  
  }  
  
  get Sector(){  
    return this.companysaveform.get('sector');  
  }  
  get Remarks(){  
    return this.companysaveform.get('remarks');  
  }  
  get Stockcode(){  
    return this.companysaveform.get('stockcode');  
  }  
  
  saveCompanyDataForm(){  
    this.submitted=false;  
    this.companysaveform.reset();  
  }  
}
