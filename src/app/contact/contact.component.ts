import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  endpoint = 'http://johannes-nissen.developerakademie.com/website/assets/send_mail.php'; //connect to php

  messageSend = false; //to disable button

  //for formsmodule
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('')
  });

  constructor(private http: HttpClient) { }

  @ViewChild('contactname') contactname: ElementRef;
  @ViewChild('contactemail') contactemail: ElementRef;
  @ViewChild('contactmessage') contactmessage: ElementRef;
  
  ngOnInit(): void {

  }

  submit() {
    // TODO: Use EventEmitter with form value

    /*let namelength = this.contactname.length;
    let emaillength = this.contactemail.length;
    let messagelength = this.contactmessage.length;*/

    //if(namelength > 0 && emaillength > 0 && messagelength >0){ alert("Entries invalid. Please try again."); }
    
    console.warn(this.profileForm.value);

    this.http.post(this.endpoint, this.profileForm.value).subscribe(
      (      response: any) => {
        console.log(response);

        this.profileForm.reset();
      },
      (      error: any) => {
        console.error(error);
        this.profileForm.reset();
      }
    );
  }

  /**
   * sending email opens snackbar
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
