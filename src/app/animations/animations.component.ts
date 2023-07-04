import { Component, EventEmitter, Output } from "@angular/core";
import { appearAnimation, colorAnimation, positionAnimation } from "./animations";
import { Subject } from "rxjs";
import { ModalService } from "src/services/modal.service";

@Component({
  selector: 'animations-component',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [ colorAnimation('colorAnimation', 400, 'green', 'blue'),
                positionAnimation('positionAnimation', 200, 2),
                appearAnimation('appearAnimation'),
              ]
})
export class AnimationComponent {
  colorStateAnimation = "begin"
  positionState="begin"
  items: string[] = []
  newItem: string = ''
  @Output() activate = new Subject<boolean>();

  constructor(private ms: ModalService) {}

  activateModal() {
    this.ms.triggerModal()
  }
  animateColor() {
    this.colorStateAnimation === "begin" ? this.colorStateAnimation = "end" : this.colorStateAnimation = "begin"
  }

  animatePosition() {
    this.positionState === "begin" ? this.positionState = "end" : this.positionState = "begin"
  }

  addItem(e: KeyboardEvent) {
    if(e.keyCode === 13) {
      this.items.push(this.newItem)
      this.newItem = ""
    }
  }

  deleteItem(idx: number) {
    this.items = this.items.filter((i, index) => index !== idx)
  }
}
