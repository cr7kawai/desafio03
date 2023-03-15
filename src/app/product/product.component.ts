import { Component, Input } from '@angular/core';
import { Product, products } from '../products';
import {DialogModule} from 'primeng/dialog';
import { CartService } from '../cart.service';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent {

  constructor(
    private cartService:CartService, 
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  Products = [...products];
  @Input() product!:Product;

  share() {
    this.messageService.add({
      severity: "info",
      detail: "El producto fué compartido",
    });
  }

  onNotify() {
    this.messageService.add({
      severity: "info",
      detail: "Serás notificado cuando el producto salga a la venta",
    });
  }

  display: boolean = false;
	showDialog() {
        this.display = true;
      }

  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.messageService.add({
      severity: "success",
      detail: "Se agrega al carrito de compras",
    });
  }

}
