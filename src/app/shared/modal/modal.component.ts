import {Component, Input, ElementRef, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {

  @Input() modalID = ''

  constructor(public modal: ModalService, public elementRef: ElementRef) {
  }

  closeModal($event: Event) {
    $event.preventDefault()
    this.modal.toggleModal(this.modalID)
  }

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement)
  }


}
