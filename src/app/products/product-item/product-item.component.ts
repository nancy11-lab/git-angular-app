import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/_model/product';
import{ProductService} from 'src/app/_services/product.services';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
  })
  export class ProductItemComponent implements OnInit{
   @Input() product :Product;

   

    constructor(private productService:ProductService) {
     /* this.product={
        id:1,
        name:'photo camera',
        price:300,
        //discount:50,
        imgUrl:'../../../../assets/img/placeholder.png'

      };*/

     }

  ngOnInit(): void {
    //this.product=this.productService.getProductById(this.product.id);

  }
  getPrice(): number{
    return this.product.discount? this.product.price - this.product.discount : this.product.price ;
  }
  addedToCart():void{
    //alert('item added');
    this.productService.productAdded.emit(this.product);
  }
    
  }