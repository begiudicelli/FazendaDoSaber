import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { close, eyeOutline, logInOutline, personAddOutline, personCircleOutline, warningOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  

  constructor(
    private authService: AuthService,
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    addIcons({
      close, 
      eyeOutline, 
      logInOutline, 
      personAddOutline, 
      personCircleOutline,
      warningOutline
    });
  }

  async login() {
    const result = await this.authService.login(this.email, this.password);
    
    if (result.success) {
      this.modalController.dismiss({ authenticated: true });
    } else {
      this.showToast(result.message || 'Erro desconhecido no login');
    }
  }

  async register() {
    const result = await this.authService.register(this.email, this.password);
    
    if (result.success) {
      this.modalController.dismiss({ authenticated: true });
    } else {
      this.showToast(result.message || 'Erro desconhecido no cadastro');
    }
  }

  async loginAnonymously() {
    const result = await this.authService.loginAnonymously();
    
    if (result.success) {
      this.modalController.dismiss({ authenticated: true });
    } else {
      this.showToast(result.message || 'Erro desconhecido no login anônimo');
    }
  }

  closeModal() {
    this.modalController.dismiss({ authenticated: false });
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger',
      buttons: [
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}