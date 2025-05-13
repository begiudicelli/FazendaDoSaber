import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { getAuth, User } from 'firebase/auth';

import { IonicModule} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { playOutline, settingsOutline, gameControllerOutline } from 'ionicons/icons';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private modalController: ModalController) {
    addIcons({ playOutline, settingsOutline, gameControllerOutline });
  }

  ngOnInit() {
      const auth = getAuth();
      const user: User | null = auth.currentUser;
      
      if (user) {
        this.router.navigate(['/escolha-regioes']);
      }

  }

  async openLoginModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data?.authenticated) {
        this.router.navigate(['/perfil']);
      }
    });
    return await modal.present();
  }
}