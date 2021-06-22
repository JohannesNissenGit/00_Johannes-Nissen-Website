import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenuMobile(){
    document.getElementById("navbarSide").style.width = "250px";
  }
  

closeNav() {
  document.getElementById("navbarSide").style.width = "0";
}

simpleScroll(id) {
  let element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  this.closeNav();
}

}
