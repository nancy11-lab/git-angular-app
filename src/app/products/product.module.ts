import { NgModule } from "@angular/core";
import { ProductItemComponent } from './product-item/product-item.component';
import{ProductsListingComponent} from './products-listing/products-listing.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { StringPipePipe } from "../pipes/string-pipe.pipe";
import { FormsModule } from "@angular/forms";
import { AuthGuardService } from "../_services/auth-guard.service";



@NgModule({
    declarations:[
    ProductItemComponent,
    ProductsListingComponent,
    AddProductComponent,
    ProductDetailsComponent,
    StringPipePipe,

    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:"" , children:[
                {path:'', component:ProductsListingComponent },
                {path:'add', component:AddProductComponent, canActivate:[AuthGuardService]},
                {path:'edit/:id', component:AddProductComponent},
                {path:'details/:id', component:ProductDetailsComponent},
               

            ]},
           

        ])

        
    ],
    exports:[],
    providers:[],
})

export class ProductModule{}