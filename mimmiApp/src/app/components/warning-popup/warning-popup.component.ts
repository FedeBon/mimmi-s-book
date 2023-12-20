import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { ServiceServerService } from 'src/app/services/service-server.service';

@Component({
  selector: 'app-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.scss']
})
export class WarningPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<HomeComponent>, private server:ServiceServerService){}


  closeDialog(){
    this.dialogRef.close();
  }

  deleteBook(){
    this.server.deleteBook(this.data.idBook)
    this.dialogRef.close();
  }
}
