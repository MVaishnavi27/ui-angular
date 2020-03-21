import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Ipos} from '../ipos';
import { IposerviceService } from '../iposervice.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {
  constructor(private iposervice:IposerviceService) { }  
  ipos : Ipos=new Ipos();  
  submitted = false;  
 ngOnInit() {
  var  ipoid=window.localStorage.getItem("update-ipoid");
  if(ipoid!=null && ipoid!="")
  {
  this.iposervice.findOneInAll5(parseInt(ipoid))
  .subscribe(
    data => {
    this.ipos =data;
    this.ipossaveform.setValue(this.ipos);

    }) ;

  this.submitted = false;
   }
  }
  ipossaveform=new FormGroup({ 
    ipoid:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    companyname:new FormControl('' , [Validators.required , Validators.minLength(3) ] ), 
    stockexchange:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    pricepershare:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),   
    totalnoofshares:new FormControl('',[Validators.required,Validators.minLength(1)]),  
    opendatetime:new FormControl()  ,
    remarks:new FormControl('' , [Validators.required , Validators.minLength(1) ] )
  });  
  
  saveIpo(saveIpo){  
    if(this.ipossaveform.invalid)
    {
      alert("Invalid form");
    }  
    else{
    this.ipos=new Ipos();
    this.ipos.ipoid=this.Ipoid.value;      
    this.ipos.companyname=this.Companyname.value; 
    this.ipos.stockexchange=this.Stockexchange.value; 
    this.ipos.pricepershare=this.Pricepershare.value;  
    this.ipos.totalnoofshares=this.Totalnoofshares.value;
    this.ipos.opendatetime=this.Opendatetime.value;
    this.ipos.remarks=this.Remarks.value;  
    this.submitted = true;  
    this.save();  
  }  }
  
    
  
  save() {  
    this.iposervice.saveIpos(this.ipos)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.ipos = new Ipos();  
  }  
  get Companyname(){  
    return this.ipossaveform.get('companyname');  
  }  
  get Ipoid(){  
    return this.ipossaveform.get('ipoid');  
  }  
  
  get Stockexchange(){  
    return this.ipossaveform.get('stockexchange');  
  }  
  get Pricepershare(){  
    return this.ipossaveform.get('pricepershare');  
  }  
  get Totalnoofshares(){  
    return this.ipossaveform.get('totalnoofshares');  
  }  
  
  get Opendatetime(){  
    return this.ipossaveform.get('opendatetime');  
  }  
  get Remarks(){  
    return this.ipossaveform.get('remarks');  
  }  
  
  saveIposForm(){  
    this.submitted=false;  
    this.ipossaveform.reset();  
  }  
}
