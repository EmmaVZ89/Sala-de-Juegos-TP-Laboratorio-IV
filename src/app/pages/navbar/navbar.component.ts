import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userLogged = true;
  user: any = {};
  isLogged = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.userLogout();
  }
}
