import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

  getContacts() {
    return this.http
      .get('/api/contacts')
      .map(res => res.json());
  }

  getPhoneTypes() {
    return this.http
      .get('/api/phoneTypes')
      .map(res => res.json());
  }
  
  getAddressTypes() {
    return this.http
      .get('/api/addressTypes')
      .map(res => res.json());
  }
}
