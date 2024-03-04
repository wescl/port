import { Component, Input } from '@angular/core';
import { HomeComponent } from 'src/app/page/home/home.component';
@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss']
})
export class ModalProjectComponent {
  @Input() isOpen = false;

  tecnologias = ['ionic', 'angular', 'firebase', 'scss', 'capacitor'];
}
