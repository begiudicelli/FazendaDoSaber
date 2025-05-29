import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously } from '@angular/fire/auth';
import { FirebaseError } from '@angular/fire/app';

interface AuthResult {
  success: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async login(email: string, password: string): Promise<AuthResult> {
    try {
      if (!email || !password) {
        return this.failure('Por favor, preencha todos os campos');
      }

      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return this.success();
    } catch (error) {
      return this.handleAuthError(error, {
        'auth/invalid-credential': 'Login ou senha invalidas.',
        'auth/invalid-email': 'Email inválido',
        'auth/user-disabled': 'Esta conta foi desativada',
        'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde',
      }, 'Ocorreu um erro durante o login');
    }
  }

  async register(email: string, password: string): Promise<AuthResult> {
    try {
      if (!email || !password) {
        return this.failure('Por favor, preencha todos os campos');
      }

      if (password.length < 6) {
        return this.failure('A senha deve ter pelo menos 6 caracteres');
      }

      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return this.success();
    } catch (error) {
      return this.handleAuthError(error, {
        'auth/email-already-in-use': 'Este email já está cadastrado',
        'auth/invalid-email': 'Email inválido',
        'auth/weak-password': 'Senha muito fraca (mínimo 6 caracteres)',
        'auth/operation-not-allowed': 'Operação não permitida',
      }, 'Ocorreu um erro durante o cadastro');
    }
  }

  async loginAnonymously(): Promise<AuthResult> {
    try {
      const userCredential = await signInAnonymously(this.auth);
      return this.success();
    } catch (error) {
      return this.handleAuthError(error, {
        'auth/operation-not-allowed': 'Login anônimo não está habilitado'
      }, 'Ocorreu um erro durante o login anônimo');
    }
  }

  private success(): AuthResult {
    return { success: true };
  }

  private failure(message: string): AuthResult {
    return { success: false, message };
  }

  private handleAuthError(
    error: unknown,
    errorMap: Record<string, string>,
    defaultMessage: string
  ): AuthResult {
    console.error('Authentication error:', error);
    
    if (error instanceof FirebaseError) {
      const message = errorMap[error.code] || defaultMessage;
      return this.failure(message);
    }
    
    return this.failure(defaultMessage);
  }
}