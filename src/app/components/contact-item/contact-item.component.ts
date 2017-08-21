import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  
  getFullName() {
    var result = '[ No Name ]';

    if (this.lastName) {
      if (this.firstName) {
        result = this.lastName + " " + this.lastName;
      }
      else {
        result = this.lastName;
      }
    }
    else {
      if (this.firstName) {
        result = this.firstName;
      }
    }

    return result;
  }

  constructor() { }

  ngOnInit() {

  }

}
