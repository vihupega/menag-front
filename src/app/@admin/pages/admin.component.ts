import { Component} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  toggledValue=true;
  toggledAd($event){
    this.toggledValue=$event;
  }
}