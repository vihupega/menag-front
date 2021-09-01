import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggledValue=true;
  @Output() toggledChange = new EventEmitter<boolean>();

  toggled(){
    if(this.toggledValue===undefined){
      this.toggledValue=true;
    }
    this.toggledValue = !this.toggledValue;    
    this.toggledChange.emit(this.toggledValue);
  }

}
