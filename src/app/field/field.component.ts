import { Component, OnInit } from '@angular/core';
import { Field } from '../field';
import { Input } from "@angular/core";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input()
  field?: Field;

  constructor() { }

  ngOnInit(): void {
  }

}
