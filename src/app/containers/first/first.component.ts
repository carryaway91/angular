import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  serverElements = [{ type: "server", name: "TestServer", content: "Just a test"}];
  visible: boolean = false;

  onServerAdded(data: { type: string; name: string; content: string}) {
    this.serverElements.push(data)
  }

  onBlueprintAdded(data: { type: string; name: string; content: string}) {
    this.serverElements.push(data)
  }
 
  onChangeFirst() {
    this.serverElements[0].name = "Second name";
  }
  ngOnInit(): void {
  }

}
