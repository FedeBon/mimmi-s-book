import { Component, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ServiceServerService } from 'src/app/services/service-server.service';
import { ManagerComponent } from '../manager/manager.component';

@Component({
  selector: 'app-dialog-insert-book',
  templateUrl: './dialog-insert-book.component.html',
  styleUrls: ['./dialog-insert-book.component.scss']
})
export class DialogInsertBookComponent {

@Input() item = 'not working';
formGroup: FormGroup

constructor(private dialogRef: MatDialogRef<ManagerComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public global: GlobalVariablesService, private serverService: ServiceServerService){}

ngOnInit(){

  this.initformGroup();

}

onSubmit(){
  this.serverService.sendNewBook(this.formGroup.value)
}

closeDialog(){
  this.dialogRef.close()
}

initformGroup(){
  this.formGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    authors: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    ediction: new FormControl("", Validators.required),
    generes: new FormControl("", Validators.required),
    goodCondiction: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
  });

  this.formGroup.patchValue({
    title: this.data.inputValue.volumeInfo.title,
    authors: this.data.inputValue.volumeInfo.authors[0],
    image: this.data.inputValue.volumeInfo.imageLinks.thumbnail,
  });
}

}