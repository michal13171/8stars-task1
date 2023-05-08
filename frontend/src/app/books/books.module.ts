import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
