import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  desktop = true;

  ngOnInit(): void {

    if (window.screen.width < 950) { // //hides parallex component in narrow displays, mobile view
      this.desktop = false;
    }
  }

}
