import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { FormsModule } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { IonicModule} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { close, eyeOutline, logInOutline, personAddOutline, personCircleOutline} from 'ionicons/icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private modalController: ModalController
  ) {}

    ngOnInit() {
      addIcons({close, eyeOutline, logInOutline, personAddOutline, personCircleOutline});
    }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.modalController.dismiss({ authenticated: true });
    } catch (error) {
      alert('Erro no login');
    }
  }

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.modalController.dismiss({ authenticated: true });
    } catch (error) {
      alert('Erro no cadastro');
    }
  }

  async loginAnonymously() {
    try {
      await this.authService.loginAnonymously();
      this.modalController.dismiss({ authenticated: true });
    } catch (error) {
      alert('Erro no login anônimo');
    }
  }

  closeModal() {
    this.modalController.dismiss({ authenticated: false });
  }
}
