import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  titleLogin = 'REGISTRO';
  newUser: User = new User();
  confirmPassword = '';
  envelope = faEnvelope;
  openEye = faEye;
  closeEye = faEyeSlash;
  userIcon = faUser;

  typePass1 = true;
  typePass2 = true;

  constructor(
    private notifyService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  registerUser(event: Event) {
    event.preventDefault();
    if (this.newUser.password === this.confirmPassword) {
      this.authService.registerNewUser(this.newUser);
    } else {
      this.notifyService.showError("Las contraseñas no son iguales", "Error contraseña");
    }
  } // end of registerUser

  toggleTypePass1() {
    this.typePass1 = !this.typePass1;
  }

  toggleTypePass2() {
    this.typePass2 = !this.typePass2;
  }
}
