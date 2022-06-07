import { Component, OnInit } from '@angular/core';
import { Field} from "../field";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // TODO: make rows observable
  row1: Array<Field> = [];
  row2: Array<Field> = [];
  row3: Array<Field> = [];

  constructor() { }

  ngOnInit(): void {

    this.row1 = [
      { index: 0, content: ''},
      { index: 1, content: ''},
      { index: 2, content: ''}
    ]

    this.row2 = [
      { index: 0, content: ''},
      { index: 1, content: ''},
      { index: 2, content: ''}
    ]

    this.row3 = [
      { index: 0, content: ''},
      { index: 1, content: ''},
      { index: 2, content: ''}
    ]
  }

}
