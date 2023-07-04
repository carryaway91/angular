import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpen: boolean = false
  isOpenChanged = new Subject<boolean>()

  triggerModal() {
    this.isOpen = !this.isOpen
    this.isOpenChanged.next(this.isOpen)
  }
}
