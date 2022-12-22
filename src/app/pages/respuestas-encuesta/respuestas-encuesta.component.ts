import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-respuestas-encuesta',
  templateUrl: './respuestas-encuesta.component.html',
  styleUrls: ['./respuestas-encuesta.component.scss'],
})
export class RespuestasEncuestaComponent implements OnInit {
  user: any = null;
  surveyResponsesList: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;
        if (user.rolUsuario == 'admin') {
          this.authService.isAdmin = true;
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.authService.getCollection('encuestas').subscribe((res) => {
      if (res != null) {
        this.surveyResponsesList = res;
        console.log(this.surveyResponsesList);
      }
    });
  }
}
