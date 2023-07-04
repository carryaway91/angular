import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-conditionals',
  templateUrl: './custom-conditionals.component.html',
  styleUrls: ['./custom-conditionals.component.css']
})
export class CustomConditionalsComponent implements OnInit {
  visible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
