import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServerBook } from 'src/app/DTO/ServerBook';
import { ServiceServerService } from 'src/app/services/service-server.service';
import { SendEmailComponent } from '../send-email/send-email.component';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WarningPopupComponent } from '../warning-popup/warning-popup.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  starsFilter:number = 0

  isThis:string = ""
  gridCols:number = 1
  cart: ServerBook[]= []
  cartIcon: string = ""
  bookSearch : string = ""
  books: ServerBook[]= [{
    _id: "",
    title: "",
    authors: "",
    image: "",
    ediction: "",
    generes: [""],
    goodCondiction: 0,
    price:0
  }]

  formGroup: FormGroup

  constructor(private breakpointObserver: BreakpointObserver, private serviceServer:ServiceServerService, private matDialog:MatDialog, public global: GlobalVariablesService, private route: Router){}

  ngOnInit() {
    this.setFilterBooks();
    this.getBooks();
    this.getWindowWidth();
  }

  getWindowWidth() {
    const screenWidth = window.innerWidth ||
                        document.documentElement.clientWidth ||
                        document.body.clientWidth;
  
    if (screenWidth<600) {
      this.gridCols = 1;
      this.isThis = "phone";
    }else{
      this.gridCols = 3;
      this.isThis = "pc";
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.getWindowWidth();
  }

  setFilterBooks(){
    this.formGroup = new FormGroup({
      starsNumber: new FormControl("", Validators.required),
      priceMin: new FormControl("", Validators.required),
      priceMax: new FormControl("", Validators.required),
      genres: new FormControl(""),
    });
    this.formGroup.patchValue({
      starsNumber: 0,
      genres: [],
    });
  }

  getBooks(){
    this.serviceServer.getBooks(this.bookSearch, this.formGroup.value).subscribe(data=>{
      this.books = data;
    })
  }

  AddToCart(book: ServerBook){
    this.cart.push(book)
  }

  renderDifference(id:string){
    let result = true
    this.cart.forEach(element => {
      for (let i = 0; i < this.cart.length; i++) {
        if (element._id==id) {
          result = false
        }
      }
    });
    return result
  }

  getTotal(){
    var total = 0;
    for(var i = 0; i < this.cart.length; i++){
        var product = this.cart[i];
        if (product.price!=null) {
          total += product.price;
        }
    }
    return total;
  }

  SpliceToCart(idToRemove:string){
    let index = this.cart.findIndex(item => item._id === idToRemove);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  newForm(){
    let width: string = ""
    switch (this.gridCols) {
      case 1:
        width = "100%"
      break;

      case 3:
        width = "30%"
      break;
    
      default:
        break;
    }
    this.matDialog.open(SendEmailComponent,{
      width: width,
      data: {
        cart: this.cart,
      }
    })
  }

  updateStars(stars:number){
    this.starsFilter = stars
    this.formGroup.patchValue({
      starsNumber: stars,
    });
    this.getBooks();
  }

  toManager(){
    this.route.navigate(['manager'])
  }

  deleteBook(idBook:string){
    let width: string = ""
    switch (this.gridCols) {
      case 1:
        width = "70%"
      break;

      case 3:
        width = "30%"
      break;
    
      default:
        break;
    }
    this.matDialog.open(WarningPopupComponent,{
      width: width,
      data: {
        idBook: idBook,
      }
    }).afterClosed().subscribe(data=>{
      this.getBooks()
    })
  }
  
}
