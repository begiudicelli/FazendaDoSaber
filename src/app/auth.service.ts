import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously } from '@angular/fire/auth';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Usuário logado:', userCredential.user);
      return userCredential;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Usuário cadastrado:', userCredential.user);
      return userCredential;
    } catch (error) {
      console.error('Erro no cadastro:', error);
      throw error;
    }
  }

  async loginAnonymously() {
    try {
      const userCredential = await signInAnonymously(this.auth);
      console.log('Usuário logado anonimamente:', userCredential.user);
      return userCredential;
    } catch (error) {
      console.error('Erro no login anônimo:', error);
      throw error;
    }
  }
}
