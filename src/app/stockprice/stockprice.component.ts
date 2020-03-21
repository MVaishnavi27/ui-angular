import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {
  constructor(private stockpriceservice:StockpriceService) { }  
  stockprice : Stockprice=new Stockprice();  
  submitted = false;  
  ngOnInit() {
    var  stockexchange=window.localStorage.getItem("update-stockexchange");
    if(stockexchange!=null && stockexchange!="")
    {
    this.stockpriceservice.findOneInAll2(stockexchange)
    .subscribe(
      data => {
      this.stockprice =data;
      this.stockpricesaveform.setValue(this.stockprice);
 
      }) ;
 
    this.submitted = false;
 
   } }
   selectFile(event) {







    const file = event.target.files.item(0);
   
   
   
   
   
   
   
   
   
   
   
    alert(file.type);
   
   
   
   
   
   
   
    if (file.type.match('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
   
   
   
   
   
   
   
     var size = event.target.files[0].size;
   
   
   
   
   
   
   
     if (size > 1000000) {
   
   
   
   
   
   
   
     alert("size must not exceeds 1 MB");
   
   
   
   
   
   
   
     this.stockpricesaveform.get('uploadfile').setValue("");
   
   
   
   
   
   
   
     }
   
   
   
   
   
   
   
     else {
   
   
   
   
   
   
   
     this.stockpricesaveform = event.target.files;
   
   
   
   
   
   
   
     }
   
   
   
   
   
   
   
    } else {
   
   
   
   
   
   
   
     alert('invalid format!');
   
   
   
   
   
   
   
    }
   
   
   
   
   
   
   
    }
   
   
   
   
   
   
   
   

  stockpricesaveform=new FormGroup({ 
    companyname:new FormControl('' , [Validators.required , Validators.minLength(3) ] ), 
    stockexchange:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    date:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    time:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),   
    currentprice:new FormControl()  ,
  });  
  
  saveStockprice(saveStockprice){ 
    if(this.stockpricesaveform.invalid)
    {
      alert("Invalid form");
    }  
    else{ 
    this.stockprice=new Stockprice();     
    this.stockprice.companyname=this.Companyname.value; 
    this.stockprice.stockexchange=this.Stockexchange.value;  
    this.stockprice.currentprice=this.Currentprice.value; 
    this.stockprice.date=this.Date.value;  
    this.stockprice.time=this.Time.value;
    this.submitted = true;  
    this.save();  
  }  }
  
    
  
  save() {  
    this.stockpriceservice.saveStockPrice(this.stockprice)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.stockprice = new Stockprice();  
    window.localStorage.removeItem("update-stockexchange")
  }  
  get Companyname(){  
    return this.stockpricesaveform.get('companyname');  
  }  
  get Stockexchange(){  
    return this.stockpricesaveform.get('stockexchange');  
  }  
  
  get Currentprice(){  
    return this.stockpricesaveform.get('currentprice');  
  }  
  get Date(){  
    return this.stockpricesaveform.get('date');  
  }  
  get Time(){  
    return this.stockpricesaveform.get('time');  
  }  
  
  saveStockPriceForm(){  
    this.submitted=false;  
    this.stockpricesaveform.reset();  
  }  
}
