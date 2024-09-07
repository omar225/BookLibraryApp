import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book.data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];
  private booksSubject = new BehaviorSubject<Book[]>(this.books);

  book_retrieved: boolean = false;

  constructor(private http: HttpClient){}


  getBookByIndex(index: number): Book | undefined {
    return this.books[index];
  }

  updateBook(index: number, updatedBook: Book) {
    this.books[index] = updatedBook;
    this.booksSubject.next(this.books);
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  editBook(index: number, updatedBook: Book): void {
    this.books[index] = updatedBook;
    this.booksSubject.next(this.books);
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
    this.booksSubject.next(this.books);
  }

  callApi(): Observable<any>{
    return this.http.get("https://mocki.io/v1/3274f995-f103-4b30-8ea6-a62e04218a75");
  }
}

