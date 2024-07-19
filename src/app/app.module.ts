import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NGRX_EFFECTS, metaReducers } from './store/connect';
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
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './store/connect';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApiClient } from '../shared/client/apiClient';
import { provideHttpClient } from '@angular/common/http';
import { SubmenuComponent } from './features/sidenav/submenu/submenu.component';
import { DomainComponent } from './features/system/domain/list-domain/domain.component';
import { CreateDomainComponent } from './features/system/domain/create-domain/create-domain.component';
import { FormDomainComponent } from './features/system/domain/form-domain/form-domain.component';

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
    SystemComponent,
    SubmenuComponent,
    DomainComponent,
    CreateDomainComponent,
    FormDomainComponent
  ],
  imports: [
    UikitModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot(NGRX_EFFECTS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    ApiClient,
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
