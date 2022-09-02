import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  titleLogin = 'Login';
  user: User = new User();

  constructor() {}

  ngOnInit(): void {}

  ingresar(event: Event) {
    event.preventDefault();
    console.info(this.user);
  }
}
