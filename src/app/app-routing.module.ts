import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { InfoComponent } from './features/info/info.component';
import { SubscribersComponent } from './features/subscribers/subscribers.component';
import { ProvisioningComponent } from './features/provisioning/provisioning.component';
import { AddressBookComponent } from './features/address-book/address-book.component';
import { ServicesComponent } from './features/services/services.component';
import { CallRoutingComponent } from './features/call-routing/call-routing.component';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { SystemComponent } from './features/system/system.component';
import { DomainComponent } from './features/system/domain/list-domain/domain.component';
import { CreateDomainComponent } from './features/system/domain/create-domain/create-domain.component';

//ogni volta che dobbiamo aggiungere una rotta
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'provisioning', component: ProvisioningComponent},
  {path: 'subscribers', component: SubscribersComponent},
  {path: 'address-book', component: AddressBookComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'call-routing', component: CallRoutingComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: '', component: SystemComponent},

  //DOMAIN: LIST, CREATE AND UPDTATE
  {path: 'system/domain', component: DomainComponent},
  {path: 'system/domain/create', component: CreateDomainComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
