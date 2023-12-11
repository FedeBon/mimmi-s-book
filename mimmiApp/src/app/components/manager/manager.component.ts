import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleBook, Item } from "../../DTO/GoggleBooks";

import { ServiceExternalService } from 'src/app/services/service-external.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogInsertBookComponent } from '../dialog-insert-book/dialog-insert-book.component';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {
  title = 'autocomplete';

  inputValue: Item = {
    volumeInfo: {
      title: "",
      authors: "",
      imageLinks:{
        thumbnail:""
    }
    }
  }

  options: Item[];

  filteredOptions: any;

  formGroup: FormGroup;
  googleBook: GoogleBook

  constructor(private external: ServiceExternalService, private fb: FormBuilder,private matDialog:MatDialog) { }

  ngOnInit() {
    this.initForm();
  }

  getBooksName() {
    this.external.getBooks(this.inputValue.volumeInfo.title).subscribe(data => {
      this.googleBook = data
      this.options = []
      this.googleBook.items.forEach(element => {
        this.options.push(element)
      });
      this.filterData(this.inputValue)
    })
  }

  initForm() {
    this.formGroup = this.fb.group({
      'libro': ['']
    })
  }

  filterData(enteredData: any) {
    this.filteredOptions = this.options.filter((item: any) => {
      return item.volumeInfo.title.toLowerCase().indexOf(enteredData.volumeInfo.title.toLowerCase()) > -1
    })
  }

  newForm(item:any){
    this.inputValue = item
    this.matDialog.open(DialogInsertBookComponent,{
      width:'30%',
      data: {
        inputValue: this.inputValue,
      }
    })
  }

}
