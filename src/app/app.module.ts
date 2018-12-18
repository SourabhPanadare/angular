import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Front Page' }
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {title: 'Products'}
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {title: 'Cart'}
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ useHash: false }),
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    OwlModule,
    NgxPaginationModule
  ],
  exports: [
     LayoutComponent
  ],
  providers: [
     {provide: LocationStrategy, useClass: PathLocationStrategy} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
