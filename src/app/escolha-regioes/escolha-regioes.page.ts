import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonGrid, IonRow, IonCol, IonBackButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-escolha-regioes',
  templateUrl: './escolha-regioes.page.html',
  styleUrls: ['./escolha-regioes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonGrid,IonRow, IonCol, IonBackButton]
})
export class EscolhaRegioesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  selecionarRegiao(regiao: string){
    return 0;
  }
}
