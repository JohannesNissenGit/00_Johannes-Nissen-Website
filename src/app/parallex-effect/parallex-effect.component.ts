import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parallex-effect',
  templateUrl: './parallex-effect.component.html',
  styleUrls: ['./parallex-effect.component.scss', './parallex.scss']
})
export class ParallexEffectComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('bg_sky') bg_sky: ElementRef;
  @ViewChild('bg_sun') bg_sun: ElementRef;
  @ViewChild('bg_bottom') bg_bottom: ElementRef;
  @ViewChild('text') text: ElementRef;
  @ViewChild('startbutton') startbutton: ElementRef;

  ngAfterViewInit() {

    window.addEventListener('scroll',  ()=> {
      var value = window.scrollY;
      this.bg_sky.nativeElement.style.top = value * 0.5 + 'px';
      /*bg_clouds.style.left =  value *0.3 + 'px';*/
      /*bg_clouds.style.top =  value *0.5 + 'px';*/
      this.bg_sun.nativeElement.style.top = 0 + value * 0.7 + 'px';
      this.bg_sun.nativeElement.style.left = 0 + value * 0.7 + 'px';
      this.bg_bottom.nativeElement.style.top = 300 + value * 0.3 + 'px';
      this.text.nativeElement.style.top = value * 0.7 + 'px';
      this.startbutton.nativeElement.style.top = value * 0.9 + 'px';
    });

  }

  ngOnInit(): void {

  }

}

// ngAfterViewInit(): void {
  //   let bg_sky = document.getElementById('bg_sky');
  //   //let bg_clouds = document.getElementById('bg_clouds');
  //   let bg_sun = document.getElementById('bg_sun');
  //   let bg_bottom = document.getElementById('bg_bottom');
  //   let text = document.getElementById('text');
  //   let startbutton = document.getElementById('startbutton');

  //   window.addEventListener('scroll', function () {
  //     var value = window.scrollY;
  //     bg_sky.style.top = value * 0.5 + 'px';
  //     /*bg_clouds.style.left =  value *0.3 + 'px';*/
  //     /*bg_clouds.style.top =  value *0.5 + 'px';*/
  //     bg_sun.style.top = 0 + value * 0.6 + 'px';
  //     bg_sun.style.left = 0 + value * 0.7 + 'px';
  //     bg_bottom.style.top = 300 + value * 0.2 + 'px';
  //     text.style.top = value * 0.7 + 'px';
  //     startbutton.style.top = value * 0.9 + 'px';
  //   })
  // }
