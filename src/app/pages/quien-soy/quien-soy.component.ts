import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss'],
})
export class QuienSoyComponent implements OnInit {
  myProfile: any = null;
  user: any = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.http
          .get('https://api.github.com/users/EmmaVZ89')
          .subscribe((res: any) => {
            this.myProfile = res;
          });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  test() {
    console.log(this.myProfile);
  }
}
