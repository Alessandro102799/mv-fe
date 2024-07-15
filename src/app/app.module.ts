import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SidenavComponent } from './features/sidenav/sidenav.component';
import { BodyComponent } from './features/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './features/info/info.component';
import { SubscribersComponent } from './features/subscribers/subscribers.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UikitModule } from '../uikit/uikit.module';
import { ProvisioningComponent } from './features/provisioning/provisioning.component';
import { AddressBookComponent } from './features/address-book/address-book.component';
import { ServicesComponent } from './features/services/services.component';
import { CallRoutingComponent } from './features/call-routing/call-routing.component';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { SystemComponent } from './features/system/system.component';
import { CardsComponent } from '../uikit/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    InfoComponent,
    SubscribersComponent,
    ProvisioningComponent,
    AddressBookComponent,
    ServicesComponent,
    CallRoutingComponent,
    AuthenticationComponent,
    SystemComponent
  ],
  imports: [
    UikitModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
