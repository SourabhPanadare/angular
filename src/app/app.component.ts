import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular6-bootstrap';

  mySlideImages = [1,2,3].map((i)=> `assets/images/banner${i}.jpg`);
  mySlideOptions={items: 1, dots: false, nav: true};

  myCarouselOptions={items: 4, dots: false, nav: true};
  gadgetOptions = [
    {title:'LG 8K TV',subtitle:'Gadget',image:'assets/images/gadget1.jpg',desc:'Just when you thought TVs couldnt get more ridiculously detailed.LG goes and announces the 88in 8K OLED panel TV ahead of CES claiming to have the largest and highest-resolution OLED panel ever.'},
    {title:'Dell XPS 13 2018',subtitle:'Gadget',image:'assets/images/gadget2.jpg',desc:'The device not only boasts a lovely bezel-less display but according to Dell users will be able to squeeze a whopping 20-hours of battery life out of it when running in full HD.'},
    {title:'Lenovo ThinkPad',subtitle:'Gadget',image:'assets/images/gadget3.jpg',desc:'This series includes privacy protection features such as an IR camera fingerprint reader and a ThinkShutter webcam cover to protect users from being watched by computer hijackers.'},
    {title:'Apple HomePod',subtitle:'Gadget',image:'assets/images/gadget4.jpg',desc:'The speaker is controlled by Apples AI assistant - Siri which can do things such as read out the news and send iMessages and also act as a musicologist that will help you discover new music.'},
    {title:'Samsung CJ791',subtitle:'Gadget',image:'assets/images/gadget5.jpg',desc:'Samsung Electronics expanded the connectivity and performance capabilities of its signature curved display line-up this year with the debut of its CJ791 monitor'},
    {title:'PROOF',subtitle:'Gadget',image:'assets/images/gadget6.jpg',desc:'PROOF is a wristband wearable with a difference. Not only does it seek to look after your health but by doing so it might just save your life.'}
  ]

}
