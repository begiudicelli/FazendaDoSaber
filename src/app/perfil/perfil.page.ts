import { Component, OnInit } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';
import { mailOutline, calendarOutline, playOutline, logOutOutline, personOutline} from 'ionicons/icons';

interface ExtendedUser extends User {
  name?: string;
  username?: string;
  joinDate?: string;
  gamesPlayed?: number;
  level?: number;
  points?: number;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class PerfilPage implements OnInit {
  user: ExtendedUser | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    addIcons({ mailOutline, calendarOutline, playOutline, logOutOutline, personOutline});

    const auth = getAuth();
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      this.user = currentUser as ExtendedUser;
      this.loadUserProfile();
    } else {
      this.router.navigate(['/login']);
    }
  }

  private loadUserProfile() {
    if (this.user) {
      this.user.name = this.user.displayName || 
                        (this.user.email ? this.user.email.split('@')[0] : 'Usuário');
      
      this.user.username = this.user.email ? 
                          '@' + this.user.email.split('@')[0].toLowerCase() : 
                          '@usuario' + Math.floor(Math.random() * 1000);
      
      this.user.joinDate = this.user.metadata?.creationTime ? 
                          new Date(this.user.metadata.creationTime).toLocaleDateString('pt-BR') : 
                          new Date().toLocaleDateString('pt-BR');
      
      this.user.gamesPlayed = 0;  
      this.user.level = 1;
      this.user.points = 0;
    }
  }

  logout() {
    const auth = getAuth();
    auth.signOut().then(() => {
      this.router.navigate(['/']);
    }).catch((error) => {
      console.error('Erro ao fazer logout:', error);
    });
  }

  playGame() {
    this.router.navigate(['/escolha-regioes']);
  }
}