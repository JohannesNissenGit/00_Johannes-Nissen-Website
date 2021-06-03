import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

 startApp(url) {
  window.open(url,'_blank');
 }

 openDoc(url) {
  window.open(url,'_blank');
 }

}
