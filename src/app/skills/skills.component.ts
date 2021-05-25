import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      'name': 'JavaScript',
      'img': './assets/icons/arrow-204-256.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
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
