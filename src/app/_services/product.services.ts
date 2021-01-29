
import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../_model/product";
import{HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable(    

)

export class ProductService{
    private products:Product[]=[];
   /* [
        {   
            id:1,
            data:[{name:'photo camera', description:'this is photo camera'}],
            price:300,
            discount:50,
            category:{id:1,name:'Arts & Crafts'},
            imagesUrls:['../../../../assets/img/vimeo-1.jpg'],
           
          },
          {
            id:2,
            data:[{name:'camera', description:'this is camera'}],
            price:3000,
           // discount:50,
           category:{id:2 , name:'Automotive'},
           imagesUrls:['../../../../assets/img/vimeo-1.jpg']
          },
          {
            id:3,
            data:[{name:'phone', description:'this is phone'}],
            price:4000,
            discount:50,
            imagesUrls:['../../../../assets/img/vimeo-1.jpg']
          },
          {
            id:4,
            data:[{name:'sumsung Not 8', description:'this is sumsung Not 8'}],
            price:6000,
            //discount:100,
            imagesUrls:['../../../../assets/img/vimeo-1.jpg']
          },
          {
            id:5,
            data:[{name:'labtop', description:'this is labtop'}],
            price:10000,
            discount:80,
            imagesUrls:['../../../../assets/img/placeholder.png']
          },
          {
            id:6,
            data:[{name:'oppo f11', description:'this is oppo f11'}],
            price:7000,
           // discount:80,
           imagesUrls:['../../../../assets/img/placeholder.png']
          },
          {
            id:7,
            data:[{name:'labtop Dell', description:'this is labtop'}],
            price:10000,
            discount:200,
            imagesUrls:['../../../../assets/img/placeholder.png']
          },
          {
            id:8,
            data:[{name:'labtop HB', description:'this is labtop'}],
            price:8000,
            discount:80,
            imagesUrls:['../../../../assets/img/placeholder.png']
          },
          {
            id:9,
            data:[{name:'labtop', description:'this is labtop'}],
            price:15000,
            discount:800,
            imagesUrls:['../../../../assets/img/placeholder.png']
          },
          {
            id:10,
            data:[{name:'camera 1', description:'this is new item1'}],
            price:5000,
            discount:100,
            imagesUrls:['../../../../assets/img/vimeo-1.jpg']
          },
          {
            id:11,
            data:[{name:'camera 2', description:'this is new item2'}],
            price:6000,
            //discount:100,
            imagesUrls:['../../../../assets/img/vimeo-1.jpg']
          },
          {
            id:12,
            data:[{name:'camera 3', description:'this is new item3'}],
            price:9000,
            discount:100,
            imagesUrls:['../../../../assets/img/vimeo-1.jpg']
          },
          {
            id:13,
            data:[{name:'camera 4', description:'this is new item4'}],
            price:9000,
            //discount:100,
            imagesUrls:['../../../../assets/img/vimeo-1.jpg']
          },
    
    ];*/
    productAdded = new EventEmitter<Product>(); 
    currentPage='listing';
    baseUrl='https://mearn-stack-backend-test.herokuapp.com/';
    constructor(private httpClient : HttpClient){}

    getAllProducts() {
       // return this.products.slice();
     return this.httpClient.get(`${this.baseUrl}product`);
    }
    getProductById(id){
        //return this.products.find((p) => p.id === id);
        return this.httpClient.get(`${this.baseUrl}product/${id}`) ; 
    }
    addProduct(product){
      let body ={  
        discount:product.discount,
        price:product.price,
        imagesUrls:product.imagesUrls,
        data:product.data,
        categoryId:product.category.id,
      };
     /* const token = localStorage.getItem('token');
      console.log(token);
      const headers = new HttpHeaders({
        authorization:token

      })*/
     return this.httpClient.post(`${this.baseUrl}product/add`, body );






      /*  const id =this.products.length;
        const newProduct:Product={
          id ,
          data:product.data ,
          price:product.price,
          discount:product.discount, 
          imagesUrls:product.imagesUrls, 
          category:product.category, 
          paymentTypes:product.paymentTypes,
          tags:product.tags }
        this.products.push(newProduct);
        console.log(this.products);*/

        



    }
    updateProduct(product:Product ){
        const index =this.products.findIndex((p) => p.id ===product.id);
       /* this.products[index]={
          id:product.id ,
          data:product.data ,
          price:product.price,
          discount:product.discount, 
          imagesUrls:product.imagesUrls, 
          category:product.category, 
          paymentTypes:product.paymentTypes,
          tags:product.tags };*/
    }
    deleteProduct(id:number){
        const index =this.products.findIndex((p) => p.id ===id);
        this.products.splice(index,1);

    }
    searchByName(productName :string){
      const prodName= productName.toLowerCase();
     return this.products.filter(p => p.data[0].name.toLowerCase().includes(prodName))
    }

}