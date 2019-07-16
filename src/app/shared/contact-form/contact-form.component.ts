import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'man-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() closeForm = new EventEmitter<boolean>();
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      message: ['', Validators.required]
    });
  }

  close() {
    this.closeForm.emit(false);
  }

  onSubmit() {
    console.log('Message sent', this.contactForm.value);
    this.closeForm.emit(false);
  }

}
