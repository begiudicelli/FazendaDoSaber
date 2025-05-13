import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonContent, IonButton, IonTitle, IonButtons, IonIcon,} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { playOutline , settingsOutline, gameControllerOutline} from 'ionicons/icons';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonTitle, IonIcon],
})

export class HomePage {
  constructor(private router: Router, private modalController: ModalController) {
    addIcons({playOutline, settingsOutline, gameControllerOutline})
  }

  async openLoginModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data?.authenticated) {
        this.router.navigate(['/escolha-regioes'])
      }
    });
    return await modal.present();
  }
}
