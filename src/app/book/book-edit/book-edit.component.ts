import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  })
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
  }

  getBookById(id: number) {
    return this.bookService.findById(id).subscribe((book) => {
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    })
  }

  update(id: number) {
    const book = this.bookForm.value;
    this.bookService.update(id, book).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Edit success!',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('/book');
    })
  }

}
