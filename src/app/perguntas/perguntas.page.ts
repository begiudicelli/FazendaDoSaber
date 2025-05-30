import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})

export class PerguntasPage implements OnInit {
  pergunta: string = '';
  opcoes: string[] = [];
  regiao: string = '';
  perguntasDaRegiao: any[] = [];
  perguntaAtualIndex: number = 0;
  respostaCorretaIndex: number = -1;
  dica: string = '';

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private navCtrl: NavController,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.regiao = navigation.extras.state['regiao'];
    }
  }

  ngOnInit() {
    if (!this.regiao) {
      this.regiao = 'Norte';
    }

    const regiaoFormatada = this.regiao.toLowerCase().replace('-', '_').replace(' ', '_');

    this.http.get<any>('assets/perguntas/perguntas.json').subscribe(data => {
      this.perguntasDaRegiao = data.regioes[regiaoFormatada] || [];

      if (this.perguntasDaRegiao.length > 0) {
        this.perguntaAtualIndex = 0;
        this.carregarPergunta(this.perguntaAtualIndex);
      } else {
        this.pergunta = 'Nenhuma pergunta disponível para essa região.';
        this.opcoes = [];
      }
    });
  }

  carregarPergunta(index: number) {
    const perguntaSelecionada = this.perguntasDaRegiao[index];
    this.pergunta = perguntaSelecionada.pergunta;
    this.opcoes = perguntaSelecionada.opcoes;
    this.respostaCorretaIndex = perguntaSelecionada.resposta;
    this.dica = perguntaSelecionada.dica;
  }

  async verificarResposta(index: number) {
    if (index === this.respostaCorretaIndex) {
      const alert = await this.alertController.create({
        header: 'Acertou!',
        message: 'Resposta correta!',
        buttons: ['OK']
      });
      await alert.present();
      await alert.onDidDismiss();

      this.perguntaAtualIndex++;

      if (this.perguntaAtualIndex < this.perguntasDaRegiao.length) {
        this.carregarPergunta(this.perguntaAtualIndex);
      } else {
        const fimAlert = await this.alertController.create({
          header: 'Parabéns!',
          message: 'Você respondeu todas as perguntas dessa região!',
          buttons: ['OK']
        });
        await fimAlert.present();
        await fimAlert.onDidDismiss();
        this.navCtrl.navigateBack('/perfil');
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Errado!',
        message: `Resposta incorreta. Dica: ${this.dica}`,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async confirmQuit() {
    const alert = await this.alertController.create({
      header: 'Desistir?',
      message: 'Você realmente quer desistir do jogo?',
      buttons: [
        { text: 'Continuar', role: 'cancel', cssClass: 'secondary' },
        { text: 'Desistir', handler: () => this.navCtrl.navigateBack('/perfil') }
      ]
    });

    await alert.present();
  }
}
