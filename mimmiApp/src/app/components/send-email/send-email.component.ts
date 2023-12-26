import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceServerService } from 'src/app/services/service-server.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {
  formGroup: FormGroup
  spinner:boolean = false
  listBooks:string

  constructor(private severService: ServiceServerService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<HomeComponent>){}

  ngOnInit(){
    this.listBooks = this.createListBooks()
    this.initformGroup();
  
  }

  initformGroup(){
    this.formGroup = new FormGroup({
      text: new FormControl("", Validators.required),
      emailAddress: new FormControl("", Validators.required),
      subject: new FormControl("", Validators.required),
    });
  
    this.formGroup.patchValue({
      text: "Ciao, ti contatto per i seguenti libri: " + this.listBooks,
      subject: "Aquisto libri"
    });
  }

  createListBooks(){
    let result: string="";
    this.data.cart.forEach((element:any) => {
      result += element.title +" di " + element.authors + ", "
    });
    return result
  }

  onSubmit(){
    this.spinner=true
    this.severService.sendEmail(this.formGroup.value).subscribe((message)=>{
      console.log(message)
      this.spinner=false
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
