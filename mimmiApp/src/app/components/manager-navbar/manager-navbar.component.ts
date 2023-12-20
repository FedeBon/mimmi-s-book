import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-navbar',
  templateUrl: './manager-navbar.component.html',
  styleUrls: ['./manager-navbar.component.scss']
})
export class ManagerNavbarComponent {

constructor(private route:Router){}

  toHome(){
    this.route.navigate(['home'])
  }

}
