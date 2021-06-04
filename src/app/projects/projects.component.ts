import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  isInViewport = false;
  projects!: any;
  projectsAnim2!: any;
  projectsLoaded = false;
  projectsLoopCounter = 0;


  constructor() { }

  ngOnInit(): void {
    this.projects = document.getElementById('projectsAnim');

    window.addEventListener("scroll", () => {
      let rect = this.projects.getBoundingClientRect();

      if (rect.y >= 0 && rect.y <= window.innerHeight) {
        this.isInViewport = true;
        //console.log('anchor is in view');

      }
    })

    this.projectsAnim2 = document.getElementById('projectsAnim2');

    window.addEventListener("scroll", () => {
      let rect = this.projectsAnim2.getBoundingClientRect();

      if (rect.y >= 0 && rect.y <= window.innerHeight) {
        this.isInViewport = true;
        //console.log('anchor is in view');
        this.loadProjectsLoop();
      }

    })

  }

  startApp(url) {
    window.open(url, '_blank');
  }

  openDoc(url) {
    window.open(url, '_blank');
  }

  loadProjectsLoop() {
    if (this.projectsLoopCounter < 5) {   //  https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop     
      setTimeout(() => {
        let counter = this.projectsLoopCounter;
        let currentId = 'project' + counter;
        document.getElementById(currentId).classList.add('slide-AnimationFromLeft');   //  call a setTimeout when the loop is called
        console.log('iteration');
        this.projectsLoopCounter++;                    //  increment the counter
        if (this.projectsLoopCounter < 5) {           //  if the counter <9, call the loop function
          this.loadProjectsLoop();             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
      }, 125)
    }
  }
}
