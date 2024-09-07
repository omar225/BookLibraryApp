import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  
  books: Book[] = this.bookService.getBooks();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void{
   // this.books.push(this.bookService.addAPIBook());
   if(!this.bookService.book_retrieved){
     this.bookService.callApi().subscribe(
      (res:Book) =>{
        this.books.push(res);
        this.bookService.book_retrieved = true;
      },
      (error: any) => {
        console.log(error);
      }
     )
   }
  }

  viewBookDetails(index: number) {
    this.router.navigate(['/book-detail',index]);
  }

  removeBook(index: number) {
    this.bookService.removeBook(index);
  }
}
