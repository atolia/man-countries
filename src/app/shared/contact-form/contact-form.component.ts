import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'man-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() closeForm = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeForm.emit(false);
  }

  onSubmit() {
    console.log("Message sent!");
    this.closeForm.emit(false);
  }

}
