import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck , AfterContentInit, AfterContentChecked
, AfterViewChecked, AfterViewInit, ContentChild, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() element: {type: string; name: string; content: string }
  @Input() name: string;
  @ViewChild('header', { static: false}) header: ElementRef;
  @ContentChild('contentParagraph', { static: true}) contentParagraph: ElementRef;

  constructor() { 
    console.log('constructor call')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges call')
    console.log(changes)
    console.log(this.contentParagraph.nativeElement.textContent)
  }

  ngOnInit(): void {
    console.log('ngOnInit call')
  }

  ngDoCheck() {
    console.log('ngOnCheck call')
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked call')
    console.log(this.contentParagraph.nativeElement.textContent)

  }

  ngAfterViewInit(): void {
    console.log('ngAfterContentInit call')
    console.log(this.header.nativeElement.textContent)

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterContentChecked call')
  }
}
