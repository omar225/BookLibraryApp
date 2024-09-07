import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  newTitle = '';
  newAuthor = '';
  newGenre = '';
  newSummary = '';
  newPublicationDate = '';
  newRating = '';

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  addBook() {
    const book: Book = {
      title: this.newTitle,
      author: this.newAuthor,
      genre: this.newGenre,
      summary: this.newSummary,
      publicationDate: this.newPublicationDate,
      rating: this.newRating,
    };
    this.bookService.addBook(book);
    this.resetForm();
    this.router.navigate(['/book-list']); // Redirect to book list or other relevant route
  }

  resetForm() {
    this.newTitle = '';
    this.newAuthor = '';
    this.newGenre = '';
    this.newSummary = '';
    this.newPublicationDate = '';
    this.newRating = '';
  }
}
