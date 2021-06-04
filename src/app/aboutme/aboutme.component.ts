import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

//for animation
isInViewport = false;
aboutmeHeader!: any;

  constructor() { }

  ngOnInit(): void {

  
      this.aboutmeHeader = document.getElementById('aboutMeHeaderAnim');
  
      window.addEventListener("scroll", () => {
        let rect = this.aboutmeHeader.getBoundingClientRect();
  
        if (rect.y >= 0 && rect.y <= window.innerHeight) {
          this.isInViewport = true;
          //console.log('anchor is in view');
          
        }
      })
  }

}
