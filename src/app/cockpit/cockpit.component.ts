import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{type: string; name: string; content: string}>()
  @ViewChild('serverContent', { static: true }) serverContent: ElementRef;

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInput: HTMLInputElement) {
    console.log(serverInput)
    this.serverCreated.emit({ type: 'server', name: serverInput.value, content: this.serverContent.nativeElement.value})
  }

  onAddBlueprint(blueprintInput: HTMLInputElement) {
    this.serverCreated.emit({ type: 'blueprint', name: blueprintInput.value, content: this.serverContent.nativeElement.value})
  }
}
