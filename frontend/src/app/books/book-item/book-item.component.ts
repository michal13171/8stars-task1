import {Component, Input} from '@angular/core';
import {Book} from "../book.service";
import {BasketService} from "../../basket/service/basket.service";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input()
  getBook: Book;

  constructor(private basketService: BasketService) {}

  addToBasketData(book: Book) {
    this.basketService.addToBasket(book);
  }
}
