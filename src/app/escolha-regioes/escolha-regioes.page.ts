import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-escolha-regioes',
  templateUrl: './escolha-regioes.page.html',
  styleUrls: ['./escolha-regioes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class EscolhaRegioesPage {

  constructor(private router: Router) { }

  selecionarRegiao(regiao: string) {
    this.router.navigate(['confirma-regiao'], { state: { regiao: regiao } });
  }

  voltar(){
    this.router.navigate(['/perfil']);
  }
}
