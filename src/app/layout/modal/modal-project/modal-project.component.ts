import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface ModalData {
  status: boolean;
  title: string;
  description: string;
  tech: string[];
  videoUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss']
})
export class ModalProjectComponent  {
  @Input() isOpen = false;
  @Input() modalData: ModalData = { status: false, title: '', description: '', tech: [], videoUrl: '' };

  tecnologias = ['ionic', 'angular', 'firebase', 'scss', 'capacitor'];
}
