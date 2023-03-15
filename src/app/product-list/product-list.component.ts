import { Component } from '@angular/core';
import { Product } from '../products';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product [] = [];

  constructor(private database:DatabaseService) {
    this.database.getItems().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }
}
