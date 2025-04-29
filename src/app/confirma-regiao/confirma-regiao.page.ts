import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { IonContent, IonToolbar, IonButtons, IonBackButton, IonImg, IonChip, IonLabel, IonGrid, IonCol, IonRow, IonText, IonButton, IonIcon} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { playOutline} from 'ionicons/icons';

@Component({
  selector: 'app-confirma-regiao',
  templateUrl: './confirma-regiao.page.html',
  styleUrls: ['./confirma-regiao.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonToolbar, IonButtons, IonBackButton, IonImg, IonChip, IonLabel, IonGrid, IonCol, IonRow, IonText, IonButton, IonIcon]
})

export class ConfirmaRegiaoPage  {
  regiaoEscolhida: string = '';
  dificuldade: string = '';
  animal: string = '';

  constructor(private router: Router) {
    addIcons({playOutline});
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.regiaoEscolhida = navigation.extras.state['regiao'];
      this.definirDificuldadeEAnimal(this.regiaoEscolhida);
    }
  }

  definirDificuldadeEAnimal(regiao: string) {
    switch (regiao) {
      case 'Norte':
        this.dificuldade = 'Difícil';
        this.animal = 'Onça-pintada';
        break;
      case 'Nordeste':
        this.dificuldade = 'Média';
        this.animal = 'Ararinha-azul';
        break;
      case 'Sudeste':
        this.dificuldade = 'Fácil';
        this.animal = 'Mico-leão-dourado';
        break;
      case 'Sul':
        this.dificuldade = 'Fácil';
        this.animal = 'Tatu-bola';
        break;
      case 'Centro-Oeste':
        this.dificuldade = 'Média';
        this.animal = 'Lobo-guará';
        break;
      default:
        this.dificuldade = 'Desconhecida';
        this.animal = 'Animal desconhecido';
    }
  }
}
