import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  isInViewport = false;
  skills!: any;
  skillsAnim2!: any;
  skillsLoaded = false;
  skillsLoopCounter = 0;

  constructor() { }

  ngOnInit(): void {
    this.skills = document.getElementById('skillsAnim');

    window.addEventListener("scroll", () => {
      let rect = this.skills.getBoundingClientRect();

      if (rect.y >= 0 && rect.y <= window.innerHeight) {
        this.isInViewport = true;
        //console.log('anchor is in view');
         //  this.loadSkillsLoop();
      }
    })

    this.skillsAnim2 = document.getElementById('skillsAnim2');

    window.addEventListener("scroll", () => {
      let rect = this.skillsAnim2.getBoundingClientRect();

      if (rect.y >= 0 && rect.y <= window.innerHeight) {
        this.isInViewport = true;
        console.log('anchor is in view');
           this.loadSkillsLoop();
      }

    })



  }

  loadSkillsLoop() {    //  https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop     
    setTimeout( () => {
      let counter = this.skillsLoopCounter;
      let currentId = 'skill'+ counter;
      document.getElementById(currentId).classList.add('slide-AnimationFromLeft');   //  call a setTimeout when the loop is called
      console.log('iteration');   
      this.skillsLoopCounter++;                    //  increment the counter
      if (this.skillsLoopCounter < 9) {           //  if the counter <9, call the loop function
        this.loadSkillsLoop();             //  ..  again which will trigger another 
      }                       //  ..  setTimeout()
    }, 125)
  }


}
