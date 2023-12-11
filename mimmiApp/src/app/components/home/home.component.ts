import { Component } from '@angular/core';
import { ServerBook } from 'src/app/DTO/ServerBook';
import { ServiceServerService } from 'src/app/services/service-server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bookSearch : string = ""

  books: ServerBook[]= [{
    title: "",
    authors: "",
    image: "",
    ediction: "",
    generes: [""]
  }]

  constructor(private serviceServer:ServiceServerService){}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.serviceServer.getBooks(this.bookSearch).subscribe(data=>{
      this.books = data;
      console.log(this.books)
    })
  }
}
