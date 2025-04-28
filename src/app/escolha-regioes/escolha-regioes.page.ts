import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { IonContent, IonToolbar, IonButton, IonButtons, IonGrid, IonRow, IonCol, IonBackButton, IonImg} from '@ionic/angular/standalone';

@Component({
  selector: 'app-escolha-regioes',
  templateUrl: './escolha-regioes.page.html',
  styleUrls: ['./escolha-regioes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonToolbar, IonButton, IonButtons, IonGrid,IonRow, IonCol, IonBackButton, IonImg]
})
export class EscolhaRegioesPage {

  constructor(private router: Router) { }

  selecionarRegiao(regiao: string) {
    this.router.navigate(['confirma-regiao'], { state: { regiao: regiao } });
  }
}
