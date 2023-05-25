import {Component} from '@angular/core';
import {BasketService} from "./service/basket.service";
import {Book} from "../books/book.service";

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
    books: Book[];

    constructor(private basketService: BasketService) {
    }

    async ngOnInit() {
        this.books = await this.basketService.getBooks();
    }
}
