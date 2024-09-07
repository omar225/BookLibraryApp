import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.data';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook() {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    this.book = this.bookService.getBookByIndex(index);
  }

  enableEditing() {
    this.isEditing = true;
  }

  onSubmit() {
    if (this.book) {
      const index = Number(this.route.snapshot.paramMap.get('index'));
      this.bookService.updateBook(index, this.book);
      this.isEditing = false;
    }
  }

  goBack() {
    this.router.navigate(['/book-list']);
  }
}
