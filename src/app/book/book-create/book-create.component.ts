import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  })

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createBook(){
    const book = this.bookForm.value;
    this.bookService.create(book).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '"created success!"',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('/book');
      this.bookForm.reset();
    });
  }

}
