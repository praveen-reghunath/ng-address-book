import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';
import { PhoneInfoComponent } from './components/phone-info/phone-info.component';

import { ApiService } from './services/api.service';
import { TypeSelectorComponent } from './components/type-selector/type-selector.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    ContactListComponent,
    ContactDetailsComponent,
    AddressInfoComponent,
    PhoneInfoComponent,
    TypeSelectorComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
