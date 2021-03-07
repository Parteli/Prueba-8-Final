import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDetailsComponent } from './clientFiles/client-details/client-details.component';
import { ClientListComponent } from './clientFiles/client-list/client-list.component';
import { CreateClientComponent } from './clientFiles/create-client/create-client.component';
import { UpdateClientComponent } from './clientFiles/update-client/update-client.component';
import { CreateEmployeeComponent } from './employeeFiles/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employeeFiles/employee-details/employee-details.component';
import { EmployeeListComponent } from './employeeFiles/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employeeFiles/update-employee/update-employee.component';
import { CartComponent } from './generalFiles/cart/cart.component';
import { LoginComponent } from './generalFiles/login/login.component';
import { CreatePetComponent } from './petFiles/create-pet/create-pet.component';
import { PetDetailsComponent } from './petFiles/pet-details/pet-details.component';
import { PetListComponent } from './petFiles/pet-list/pet-list.component';
import { UpdatePetComponent } from './petFiles/update-pet/update-pet.component';
import { CreateSaleComponent } from './saleFiles/create-sale/create-sale.component';
import { SaleListComponent } from './saleFiles/sale-list/sale-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'employee/list', component: EmployeeListComponent },
  { path: 'employee/add', component: CreateEmployeeComponent },
  { path: 'employee/update/:empID', component: UpdateEmployeeComponent },
  { path: 'employee/details/:empID', component: EmployeeDetailsComponent },
  { path: 'client/list', component: ClientListComponent },
  { path: 'client/add', component: CreateClientComponent },
  { path: 'client/update/:cliDni', component: UpdateClientComponent },
  { path: 'client/details/:cliDni', component: ClientDetailsComponent },
  { path: 'pet/list', component: PetListComponent },
  { path: 'pet/add', component: CreatePetComponent },
  { path: 'pet/update/:petId', component: UpdatePetComponent },
  { path: 'pet/details/:petId', component: PetDetailsComponent },
  { path: 'sale/list', component: SaleListComponent },
  { path: 'sale/add', component: CreateSaleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
