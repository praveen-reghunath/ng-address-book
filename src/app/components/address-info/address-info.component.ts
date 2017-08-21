import { Component, OnInit } from '@angular/core';
import { TypeSelectorComponent } from '../type-selector/type-selector.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

  addressTypes: string[];
  
  constructor(private api: ApiService) { }
  
  ngOnInit() {
    this.api.getAddressTypes().subscribe((addressTypes)=>{
      this.addressTypes =  addressTypes;
    });
  }

  onChange(){
    
  }

}
