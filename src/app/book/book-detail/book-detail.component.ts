import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book = {};

  // @ts-ignore
  id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.id = id;
      // @ts-ignore
      this.getBookById(id);
    })
  }

  ngOnInit(): void {
    // @ts-ignore
    this.getBookById(id)
  }

  getBookById(id: number) {
    return this.bookService.findById(id).subscribe((book) => {
      this.book = book;
    })
  }

}
