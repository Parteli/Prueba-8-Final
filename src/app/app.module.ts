import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employeeFiles/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employeeFiles/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employeeFiles/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employeeFiles/employee-details/employee-details.component';
import { EmpIdValidatorDirective } from './employeeFiles/validatorsEmployee/emp-id-validator.directive';
import { EmpPwdValidatorDirective } from './employeeFiles/validatorsEmployee/emp-pwd-validator.directive';

import { PetListComponent } from './petFiles/pet-list/pet-list.component';
import { CreatePetComponent } from './petFiles/create-pet/create-pet.component';
import { PetDetailsComponent } from './petFiles/pet-details/pet-details.component';
import { UpdatePetComponent } from './petFiles/update-pet/update-pet.component';

import { ClientListComponent } from './clientFiles/client-list/client-list.component';
import { ClientDetailsComponent } from './clientFiles/client-details/client-details.component';
import { CreateClientComponent } from './clientFiles/create-client/create-client.component';
import { UpdateClientComponent } from './clientFiles/update-client/update-client.component';
import { CliDniValidatorDirective } from './clientFiles/validatorsClient/cli-dni-validator.directive';
import { CliEmailValidatorDirective } from './clientFiles/validatorsClient/cli-email-validator.directive';

import { SaleListComponent } from './saleFiles/sale-list/sale-list.component';
import { CreateSaleComponent } from './saleFiles/create-sale/create-sale.component';

import { CartComponent } from './generalFiles/cart/cart.component';
import { LoginComponent } from './generalFiles/login/login.component';

import { AdminTopBarComponent } from './navegation/admin-top-bar/admin-top-bar.component';
import { DebugTopBarComponent } from './navegation/debug-top-bar/debug-top-bar.component';
import { NormalTopBarComponent } from './navegation/normal-top-bar/normal-top-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    PetListComponent,
    CreatePetComponent,
    PetDetailsComponent,
    UpdatePetComponent,
    ClientListComponent,
    ClientDetailsComponent,
    CreateClientComponent,
    UpdateClientComponent,
    SaleListComponent,
    CreateSaleComponent,
    EmpIdValidatorDirective,
    EmpPwdValidatorDirective,
    AdminTopBarComponent,
    DebugTopBarComponent,
    NormalTopBarComponent,
    CartComponent,
    CliDniValidatorDirective,
    CliEmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
