import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nInp: ElementRef;
  @ViewChild('amountInput') aInp: ElementRef;
  @Output() shopAdd = new EventEmitter();

  btns() {
    this.shopAdd.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
