import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface ModalData {
  status: boolean;
  title: string;
  description: string;
  tech: string[];
  videoUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() isOpen = false;
  @Input() modalData: ModalData = { status: false, title: '', description: '', tech: [], videoUrl: '' };
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }


}
