import { Component } from '@angular/core';

import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ApiService } from './services/api.service';
import { IContact } from './interfaces/contact.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  contacts: any;

  constructor(private api: ApiService){
    api.getContacts().subscribe((contacts)=>{
      this.contacts =  contacts;
    });
  }

}
