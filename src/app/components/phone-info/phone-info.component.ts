import { Component, OnInit } from '@angular/core';
import { TypeSelectorComponent } from '../type-selector/type-selector.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.css']
})
export class PhoneInfoComponent implements OnInit {

  phoneTypes: string[];
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPhoneTypes().subscribe((phoneTypes)=>{
      this.phoneTypes =  phoneTypes;
    });
  }

}
