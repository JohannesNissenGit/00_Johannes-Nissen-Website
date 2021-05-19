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

    if (window.screen.width < 600) { // 768px portrait  //hides parallex component in mobile view
      this.desktop = false;
    }
  }

}
