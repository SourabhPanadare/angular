# Angular6 Material SASS

  https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b
  https://medium.com/@beeman/tutorial-styling-angular-cli-v6-apps-with-bootstrap-8d4f8ea5adae
  https://material.angular.io/
  https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
  https://github.com/MainaWycliffe/Responsive-Navbar-with-Angular-Material-and-Angular-Flex-Layout/tree/master/src
  https://medium.com/@biswa8998/owl-carousel-with-angular-6-banner-slider-and-image-carousel-3b3ded0070c5
  http://michaelbromley.github.io/ngx-pagination/#/

  https://github.com/ikismail/Angular-ShoppingCart

# Installation

  sudo npm install -g @angular/cli
  ng new angular6-bootstrap --style=scss or ng new angular6-bootstrap
  npm install bootstrap font-awesome
  npm install -save @angular/material @angular/cdk @angular/animations
  npm install -save @angular/flex-layout@6.0.0-beta.18
  npm install ngx-owl-carousel owl.carousel jquery --save
  npm install ngx-pagination --save

  npm install script-loader

# Angular App On The Server

  ng serve
  ng build --prod

  Copy the content from dist folder and paste it on server

  Open index.html from dist folder and replace <base href="/"> with <base href="/angular-material/">

  Create node_modules at the root folder of domain


# Angular App Testing With Karma And Jasmine

  ng test

# Angular Project Structure

  ng generate component layout
  ng generate component header
  ng generate component footer

  ng generate component new-component --module app


 src/styles.scss:-
    @import "styles-variables";

    @import '~bootstrap/scss/bootstrap-reboot';
    @import '~bootstrap/scss/bootstrap-grid';

    $fa-font-path: "~font-awesome/fonts";
    @import "~font-awesome/scss/font-awesome.scss";

src/index.html:-
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

src/styles-variables.scss
   $grid-breakpoints: (
     xs: 0,
     sm: 576px,
     md: 768px,
     lg: 992px,
     xl: 1200px
   );

 src/app/layout/layout.component.html
   <app-header></app-header>

   <ng-content></ng-content>

   <app-footer></app-footer>

 src/app/app.component.html
   <app-layout></app-layout>

 src/app/app.module.ts
    exports: [
       LayoutComponent
    ],
