import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  p: number = 1;

  productOptions = [
    {id:'1',title:'LG 8K TV',subtitle:'Gadget',image:'assets/images/gadget1.jpg',desc:'Just when you thought TVs couldnt get more ridiculously detailed.LG goes and announces the 88in 8K OLED panel TV ahead of CES claiming to have the largest and highest-resolution OLED panel ever.'},
    {id:'2',title:'Dell XPS 13 2018',subtitle:'Gadget',image:'assets/images/gadget2.jpg',desc:'The device not only boasts a lovely bezel-less display but according to Dell users will be able to squeeze a whopping 20-hours of battery life out of it when running in full HD.'},
    {id:'3',title:'Lenovo ThinkPad',subtitle:'Gadget',image:'assets/images/gadget3.jpg',desc:'This series includes privacy protection features such as an IR camera fingerprint reader and a ThinkShutter webcam cover to protect users from being watched by computer hijackers.'},
    {id:'4',title:'Apple HomePod',subtitle:'Gadget',image:'assets/images/gadget4.jpg',desc:'The speaker is controlled by Apples AI assistant - Siri which can do things such as read out the news and send iMessages and also act as a musicologist that will help you discover new music.'},
    {id:'5',title:'Samsung CJ791',subtitle:'Gadget',image:'assets/images/gadget5.jpg',desc:'Samsung Electronics expanded the connectivity and performance capabilities of its signature curved display line-up this year with the debut of its CJ791 monitor'},
    {id:'6',title:'PROOF',subtitle:'Gadget',image:'assets/images/gadget6.jpg',desc:'PROOF is a wristband wearable with a difference. Not only does it seek to look after your health but by doing so it might just save your life.'},
    {id:'7',title:'Iphone X',subtitle:'Gadget',image:'assets/images/gadget7.jpg',desc:'Apple iPhone X smartphone was launched in September 2017. The phone comes with a 5.80-inch touchscreen display with a resolution of 1125 pixels by 2436 pixels at a PPI of 458 pixels per inch.'},
    {id:'8',title:'One Plus 3T',subtitle:'Gadget',image:'assets/images/gadget8.jpg',desc:'Unlock your OnePlus 6T with the fastest in-display fingerprint sensor on any smartphone. We are setting a new industry standard with our cutting-edge Screen Unlock technology.'}
  ]

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goPlaces() {
    this.router.navigate(['/', 'product-details']);
  }

}
