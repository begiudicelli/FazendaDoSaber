import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { playOutline} from 'ionicons/icons';

@Component({
  selector: 'app-confirma-regiao',
  templateUrl: './confirma-regiao.page.html',
  styleUrls: ['./confirma-regiao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
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

  voltar(){
    this.router.navigate(['/escolha-regioes']);
  }
  
 jogar(){
  this.router.navigate(['/perguntas'], {
    state: {
      regiao: this.regiaoEscolhida
    }
  });
}
}
