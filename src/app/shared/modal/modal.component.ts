import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ModalService } from "src/services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpen: boolean = false
  sub: Subscription
  constructor(private ms: ModalService) {}

  ngOnInit() {
    this.isOpen = this.ms.isOpen
    this.sub = this.ms.isOpenChanged.subscribe(val => this.isOpen = val)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
