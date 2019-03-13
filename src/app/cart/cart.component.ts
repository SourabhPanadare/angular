import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  p: number = 1;

  productOptions = [
    {id:'1',title:'LG 8K TV',subtitle:'Gadget',image:'assets/images/gadget1.jpg',desc:'Just when you thought TVs couldnt get more ridiculously detailed.LG goes and announces the 88in 8K OLED panel TV ahead of CES claiming to have the largest and highest-resolution OLED panel ever.'},
    {id:'2',title:'Dell XPS 13 2018',subtitle:'Gadget',image:'assets/images/gadget2.jpg',desc:'The device not only boasts a lovely bezel-less display but according to Dell users will be able to squeeze a whopping 20-hours of battery life out of it when running in full HD.'},
    {id:'3',title:'Lenovo ThinkPad',subtitle:'Gadget',image:'assets/images/gadget3.jpg',desc:'This series includes privacy protection features such as an IR camera fingerprint reader and a ThinkShutter webcam cover to protect users from being watched by computer hijackers.'}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goShipping() {
    this.router.navigate(['/', 'products']);
  }

  goCheckout() {
    
  }

}
