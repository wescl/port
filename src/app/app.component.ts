import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portcley';
  isAdLoaded = false;

  ngOnInit() {
    //this.setupPageReload();
    // Coloque lógica adicional de inicialização, se necessário
  }

  adLoaded() {
    this.isAdLoaded = true;
  }

  private setupPageReload() {
    setTimeout(() => {
      window.location.reload();
    }, 3000); // 10000 milissegundos = 10 segundos
  }
}
