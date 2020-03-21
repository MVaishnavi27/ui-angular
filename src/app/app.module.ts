import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ImportComponent } from './import/import.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './userlist/userlist.component';
import {DataTablesModule} from 'angular-datatables';
import { CompanydataComponent } from './companydata/companydata.component';
import { IposComponent } from './ipos/ipos.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { CompareCompanyComponent } from './comparecompany/comparecompany.component';
import { IposlistComponent } from './iposlist/iposlist.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { HighchartsService } from './highcharts.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    AdminComponent,
    ImportComponent,
    AdminlandingComponent,
    ManagecompaniesComponent,
    HomeComponent,
    UserListComponent,
    CompanydataComponent,
    IposComponent,
    StockexchangeComponent,
    UserlandingComponent,
    CompareCompanyComponent,
    IposlistComponent,
    CompanylistComponent,
    StockpriceComponent,
    StockpricelistComponent,
    StockexchangelistComponent,
    UsernavbarComponent,
    AdminnavbarComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule,
    HighchartsChartModule
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
   