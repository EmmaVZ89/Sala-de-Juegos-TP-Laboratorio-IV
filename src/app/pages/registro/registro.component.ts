import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/services/notification.service';

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

  typePass1 = true;
  typePass2 = true;

  constructor(private notifyService:NotificationService) {}

  ngOnInit(): void {}

  registerUser(event: Event) {
    event.preventDefault();
    if (this.newUser.password === this.confirmPassword) {
      console.log('usuario registrado');
    }

    this.notifyService.showSuccess("Sesión iniciada", "Exito");
  }

  toggleTypePass1() {
    this.typePass1 = !this.typePass1;
  }

  toggleTypePass2() {
    this.typePass2 = !this.typePass2;
  }
}
