import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent implements OnInit {
  
  @Input() contactTypes: string[];

  constructor() { }
  
  ngOnInit() {
    // this.contactTypes = ['asdasdasd','dasdsdsd']
  }

  onTypeChange(){
    console.log('Type Changed');
  }

  onDelete(){
    console.log('Delete request!');
  }

}
