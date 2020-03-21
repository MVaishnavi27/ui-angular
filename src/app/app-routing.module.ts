import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportComponent } from './import/import.component';
import { HomeComponent } from './home/home.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { UserListComponent } from './userlist/userlist.component';
import { CompanydataComponent } from './companydata/companydata.component';
import { IposComponent } from './ipos/ipos.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { CompareCompanyComponent } from './comparecompany/comparecompany.component';
import { IposlistComponent } from './iposlist/iposlist.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';



const routes: Routes = [
{path:"app" , component:AppComponent},
{path:"home" , component:HomeComponent},
{path:"" , component:HomeComponent},
{path:"login", component:LoginComponent},
{path:"register", component:RegisterComponent},
{path:"admin" , component:AdminComponent},
{path:"adminlanding" , component:AdminlandingComponent},
{path:"import" , component:ImportComponent},
{path:"managecompanies",component:ManagecompaniesComponent},
{path:"userlist",component:UserListComponent},
{path:"companydata",component:CompanydataComponent},
{path:"ipos",component:IposComponent},
{path:"stockexchange",component:StockexchangeComponent},
{path:"userlanding",component:UserlandingComponent},
{path:"comparecompany",component:CompareCompanyComponent},
{path:"iposlist",component:IposlistComponent},
{path:"companylist",component:CompanylistComponent},
{path:"stockprice",component:StockpriceComponent},
{path:"stockpricelist",component:StockpricelistComponent},
{path:"stockexchangelist",component:StockexchangelistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
