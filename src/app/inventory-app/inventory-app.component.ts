import { Component, OnInit } from '@angular/core';
import { Product } from './app';
@Component({
  selector: 'app-inventory-app',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.css']
})
export class InventoryAppComponent implements OnInit {
  product:Product;
  constructor() {
    this.product = new Product('NICEHAT','a nice black hat','https://ocpvd5a60.qnssl.com/7c512a8c-29f6-4d4a-9525-5f354f033332.jpg',['men','sgjs','hats'],99)
  }

  ngOnInit() {
  }

}
