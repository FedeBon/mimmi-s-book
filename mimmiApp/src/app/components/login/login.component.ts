import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ServiceServerService } from 'src/app/services/service-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginErrorCredentials:boolean= false
  
  formGroup: FormGroup;

  constructor(private serviceServer:ServiceServerService, private router: Router, public global: GlobalVariablesService){}

  ngOnInit(){
    this.initformGroup();
  
  }

  initformGroup(){
    this.formGroup = new FormGroup({
      nickname: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

onSubmit(){
  this.serviceServer.getUser(this.formGroup.value).subscribe((data)=>{
    if (data.length>0) {
      this.global.setUserInfos(data)
      this.router.navigate(['/manager'])
    } else {
      this.loginErrorCredentials = true
    }
    
  })
}

}
