import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
  faArrowAltCircleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import * as moment from 'moment';

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
  arrow = faArrowRight;
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
        this.authService.user$.subscribe((user: any) => {
          if (user) {
            this.user = user;
            this.createLog();
          }
        });
        this.notifyService.showSuccess('Redirigiendo...', 'Inicio exitoso');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      }
    }
  } // end of login

  createLog() {
    const currentDate = moment(new Date()).format('DD-MM-YYYY HH:mm:ss');
    const log = {
      user: this.user,
      date: currentDate,
    };
    this.authService
      .createUserLog('userLogs', log)
      .then((res) => {
        console.log('Log Creado');
      })
      .catch((error) => {
        console.log('Error al crear el log');
      });
  } // end of createLog

  toggleTypePass1() {
    this.typePass1 = !this.typePass1;
  }

  toggleTypePass2() {
    this.typePass2 = !this.typePass2;
  }

  loadFields(option: number) {
    switch (option) {
      case 1:
        this.confirmPassword = 'soyinvitado1234';
        this.userForm.email = 'invitado@mail.com';
        this.userForm.password = 'soyinvitado1234';
        this.notifyService.showInfo('Campos cargados', 'Invitado');
        break;
      case 2:
        this.confirmPassword = 'soyadmin1234';
        this.userForm.email = 'admin@mail.com';
        this.userForm.password = 'soyadmin1234';
        this.notifyService.showInfo('Campos cargados', 'Administrador');
        break;
      default:
        break;
    }
  } // end of loadFields
}
