import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';

import { IonicModule} from '@ionic/angular';


@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerguntasPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  ngOnInit() {
  }



  async confirmQuit() {
  const alert = await this.alertController.create({
    header: 'Desistir?',
    message: 'Você realmente quer desistir do jogo?',
    buttons: [
      {
        text: 'Continuar',
        role: 'cancel',
        cssClass: 'secondary'
      },
      {
        text: 'Desistir',
        handler: () => {
          this.navCtrl.navigateBack('/perfil');
        }
      }
    ]
  });

  await alert.present();
}


}
