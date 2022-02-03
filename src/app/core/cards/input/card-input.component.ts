import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {

  @Input('ngModel')
  typedInput: string = 'teste';

  constructor() {

  }

  ngOnInit(): void {
  }

}

