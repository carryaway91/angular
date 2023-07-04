import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean;
  @Output() onClicked = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onClicked.emit()
  }
}
