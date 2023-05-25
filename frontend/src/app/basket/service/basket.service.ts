import { Injectable } from '@angular/core';
import {Book} from "../../books/book.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  books: Book[] = [];

  addToBasket(book: Book) {
    this.books.push(book);
  }

  async getBooks(): Promise<Book[]> {
    return this.books;
  }
}
