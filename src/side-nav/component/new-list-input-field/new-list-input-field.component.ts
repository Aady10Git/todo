import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './new-list-input-field.component.html',
  styleUrls: ['./new-list-input-field.component.css']
})
export class NewListInputFieldComponent implements OnInit {

  @Input () newListInputField: string;
  @Output () onTickClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
