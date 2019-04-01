import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  myCarouselOptions={items: 2, dots: true, nav: true, responsive:{ 0:{items: 1},768:{items: 2 }}};
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);


  constructor() { }

  ngOnInit() {
  }

   scrollTOElement = (element, offsetParam?, speedParam?) => {
    const toElement = $(element);
    const focusElement = $(element);
    const offset = offsetParam * 1 || 200;
    const speed = speedParam * 1 || 500;
    $('html, body').animate({
      scrollTop: toElement.offset().top - 56
    }, speed);
    if (focusElement) {
      $(focusElement).focus();
    }
  }

}
