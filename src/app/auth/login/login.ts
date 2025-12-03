import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule as PanelModule } from 'primeng/panel';
import { InputTextModule as PInputTextModule } from 'primeng/inputtext';
import { IconFieldModule as PIconFieldModule } from 'primeng/iconfield';
import { ButtonModule as PButtonModule } from 'primeng/button';

import { Auth as AuthService } from '../../../services/auth/auth';
import { Auth as AuthModel } from '../../../models/auth.model';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    PInputTextModule,
    PIconFieldModule,
    PButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  credentials: AuthModel = new AuthModel();
  isProcessing: boolean = false;

  async login() {
    this.isProcessing = true;

    try {
      const response = await this.authService.login(this.credentials);
      this.router.navigate(['/application']);

    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      this.isProcessing = false;
    }
  }
}
