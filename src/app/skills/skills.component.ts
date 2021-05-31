import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

isInViewport = false;
skills!: any;

  constructor() { }

  ngOnInit(): void {
this.skills= document.getElementById('skills');

window.addEventListener("scroll", () => {
  let rect = this.skills.getBoundingClientRect();

  if (rect.y >=0 && rect.y <= window.innerHeight){
    this.isInViewport = true;
  }
})

  }

  loadSkills() {
    for (let i = 0; i < this.skills.length; i++) {
      let skillname = this.skills[i].name;
      let skillImg = this.skills[i].img;
      document.getElementById('listContainer').innerHTML +=
        `<div class="skillSingleContainer" id='skill${i}'>
  <img src="${skillImg}">
  <div class="skillSingle">
      <div class="hl3">
      ${skillname}
      </div>

  </div>
  </div>`;
    }
  }

}
