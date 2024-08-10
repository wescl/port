import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

interface Contact {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  nome: string = '';
  mensagem: string = '';
  messages$: Observable<any[]>;
  isButtonDisabled: boolean = false;
  timeRemaining: number = 0;
  private timerInterval: any;
  showMessage: boolean = false;
  isLoading: boolean = false; // Novo estado de carregamento

  contacts: Contact[] = [
    { icon: 'fa-brands fa-html5', name: '(21) 9 7490-0400' },
  ];

  constructor(private db: AngularFireDatabase) {
    this.messages$ = this.db.list('/messages').valueChanges();
  }

  addMessage(form: NgForm): void {
    if (form.valid) {
      this.isLoading = true; // Começa o carregamento

      // Simula um atraso de 1 segundo
      setTimeout(() => {
        const message = { nome: this.nome, mensagem: this.mensagem };
        this.db.list('/messages').push(message);
        this.nome = '';
        this.mensagem = '';
        form.resetForm(); // Limpa o formulário após o envio
        this.disableButton();
        this.showSuccessMessage();
        this.isLoading = false; // Para o carregamento
      }, 1000);
    }
  }

  disableButton(): void {
    this.isButtonDisabled = true;
    this.timeRemaining = 10;
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        this.isButtonDisabled = false;
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  showSuccessMessage(): void {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 4000);
  }
}
