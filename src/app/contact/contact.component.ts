import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  endpoint = 'http://johannes-nissen.developerakademie.com/assets/send_mail.php'; //connect to php

  messageSend = false; //to disable button

  //for formsmodule
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  
  //for animation
  isInViewport = false;
  contact!: any;

  constructor(private http: HttpClient) { }

  //@ViewChild('contactname') contactname: ElementRef;
  //@ViewChild('contactemail') contactemail: ElementRef;
  //@ViewChild('contactmessage') contactmessage: ElementRef;
  
  ngOnInit(): void {

    this.contact = document.getElementById('contactHeaderAnim');

    window.addEventListener("scroll", () => {
      let rect = this.contact.getBoundingClientRect();

      if (rect.y >= 0 && rect.y <= window.innerHeight) {
        this.isInViewport = true;
        //console.log('anchor is in view');
        
      }

    })


  }

  submit() {
    
    
    //console.warn(this.profileForm.value); //use for debugging

    this.http.post(this.endpoint, this.profileForm.value).subscribe(
      (      response: any) => {
        //console.log(response);  //use for debugging

        this.profileForm.reset();
      },
      (      error: any) => {
        //console.error(error); //use for debugging
        this.profileForm.reset();
      }
    );
  }

  /**
   * open snackbar after sending mail
   */
openSnackbar() {
  this.messageSend = true; 
  console.log('message', this.messageSend);
  document.getElementById('snackbar')?.classList.remove('d-none');
  document.getElementById('snackbar')?.classList.remove('zMinus100');
  document.getElementById('snackbar')?.classList.add('z10');  

  setTimeout(() => { //snackbar disappears after timeout
    document.getElementById('snackbar')?.classList.add('d-none');
    document.getElementById('snackbar')?.classList.remove('z10');
    document.getElementById('snackbar')?.classList.add('zMinus100');
  }, 2200);
  }
  
  
  

}
