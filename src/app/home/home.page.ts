import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonTitle, IonToolbar, IonHeader, IonFooter, IonButtons, IonIcon,} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { playOutline , settingsOutline, gameControllerOutline} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonTitle, IonToolbar, IonHeader, IonFooter, IonButtons, IonIcon],
})
export class HomePage {
  constructor(private router: Router) {
    addIcons({playOutline, settingsOutline, gameControllerOutline})
  }
  
  goToRegioesPage(){
    this.router.navigate(['/escolha-regioes'])
  }
}
