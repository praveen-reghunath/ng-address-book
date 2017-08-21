import { Component, OnInit, Input } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { IContact } from '../../interfaces/contact.type';
import { IAddress } from '../../interfaces/address.type';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: IContact[];

  constructor() { }

  ngOnInit() {
  }

  addNewContact() {
    console.log('New contact');
  }

}
