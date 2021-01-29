import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product:Product= {_id:'',data:[{}] , paymentTypes:[], tags:[], category:{} };
  paymentTypes:PaymentType[]=[];
  productCategory : ProductCategory[]=[];
  editMode:boolean = false;
  radiobutton:number;

  constructor(private paymentTypeService :PaymentTypeService ,
     private productCategoryService: ProductCategoryService,
     private activaedRoute :ActivatedRoute,
     private productService: ProductService,
     private router: Router,
     
     ) { 

  }

  ngOnInit(): void {
   
 
  this.editMode=  this.activaedRoute.snapshot.url[1] &&  this.activaedRoute.snapshot.url[1].path ==='edit' && true ;
  
  if(this.editMode){
    const id = this.activaedRoute.snapshot.params.id;
    this.productService.getProductById(id).subscribe(
      (res)=>{this.product= res['product']},
      ()=>{},
      ()=>{},
    );

  }
    
    this.paymentTypes = this.paymentTypeService.getAllPayments();
    this.productCategory = this.productCategoryService.getAllProductCategory();
  }
  onSubmit(form){
   // console.log(form.value);
  /* for(let index=0; index< this.paymentTypes.length; index++){
     if(form.value['check_' + index]){
       this.product.paymentTypes.push(this.paymentTypes[index]);

     }
   }*/

   // console.log(this.product);
     //console.log(form.value);
     this.productService.addProduct(this.product).subscribe(
       (response) => {
         console.log(response);
         this.router.navigate(['/product', 'listing']);

      },
       (err) => {console.log(err)},
       () => {},

     );

  }
  onTagAdded(tagInput){
    this.product.tags.push({name: tagInput.value , id:tagInput.value});
    tagInput.value='';

  }
  deleteTag(id){
    this.product.tags= this.product.tags.filter(p => p.id !== id);

   /* var index= this.product.tags.indexOf(tagId);
    this.product.tags.splice(index,1);*/

  }
  deleteAllTags(){
    this.product.tags.length=0;
  }


}
