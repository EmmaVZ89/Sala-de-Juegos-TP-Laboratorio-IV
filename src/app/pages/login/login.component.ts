import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  titleLogin = 'LOGIN';
  user: any = new User();
  userForm: any = new User();
  envelope = faEnvelope;
  openEye = faEye;
  closeEye = faEyeSlash;
  userIcon = faUser;
  typePass1 = true;
  typePass2 = true;
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private notifyService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;
      }
    });
  }

  async login(event: Event) {
    event.preventDefault();
    if (
      this.userForm.email === '' ||
      this.userForm.password === '' ||
      this.confirmPassword === ''
    ) {
      this.notifyService.showWarning(
        'Debes completar todos los campos',
        'Atención'
      );
    } else if (this.userForm.password !== this.confirmPassword) {
      this.notifyService.showWarning(
        'Las contraseñas deben ser iguales',
        'Atención'
      );
    } else {
      const inicio = await this.authService.userLogin(
        this.userForm.email,
        this.userForm.password
      );
      if (inicio) {
        this.notifyService.showSuccess('Redirigiendo...', 'Inicio exitoso');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      }
    }
  } // end of login

  toggleTypePass1() {
    this.typePass1 = !this.typePass1;
  }

  toggleTypePass2() {
    this.typePass2 = !this.typePass2;
  }
}
