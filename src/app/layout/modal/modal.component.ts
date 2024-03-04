import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ModalData {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() isOpen = false;
  @Input() modalData: ModalData = { title: '', description: '' , imageUrl: ''};
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
}
