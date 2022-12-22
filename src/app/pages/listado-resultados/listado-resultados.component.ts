import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.scss'],
})
export class ListadoResultadosComponent implements OnInit {
  user: any = null;
  ahorcadoResultList: any[] = [];
  mayorMenorResultList: any[] = [];
  preguntadosResultList: any[] = [];
  juegoDeLaVidaResultList: any[] = [];
  ahorcadoGames: number = 0;
  ahorcadoVictories: number = 0;
  ahorcadoDefeats: number = 0;
  mayorMenorGames: number = 0;
  mayorMenorVictories: number = 0;
  mayorMenorDefeats: number = 0;
  preguntadosGames: number = 0;
  preguntadosVictories: number = 0;
  preguntadosDefeats: number = 0;
  juegoDeLaVidaGames: number = 0;
  juegoDeLaVidaVictories: number = 0;
  juegoDeLaVidaDefeats: number = 0;
  ownAhorcadoGames: number = 0;
  ownAhorcadoVictories: number = 0;
  ownAhorcadoDefeats: number = 0;
  ownMayorMenorGames: number = 0;
  ownMayorMenorVictories: number = 0;
  ownMayorMenorDefeats: number = 0;
  ownPreguntadosGames: number = 0;
  ownPreguntadosVictories: number = 0;
  ownPreguntadosDefeats: number = 0;
  ownJuegoDeLaVidaGames: number = 0;
  ownJuegoDeLaVidaVictories: number = 0;
  ownJuegoDeLaVidaDefeats: number = 0;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.authService.getCollection('ahorcadoResultados').subscribe((res) => {
      if (res != null) {
        this.ahorcadoResultList = res;
        this.ahorcadoGames = this.ahorcadoResultList.length;
        for (let i = 0; i < this.ahorcadoResultList.length; i++) {
          const result = this.ahorcadoResultList[i];
          if (result.vitory) {
            this.ahorcadoVictories++;
          } else {
            this.ahorcadoDefeats++;
          }
          setTimeout(() => {
            if (result.user.userId == this.user.userId) {
              this.ownAhorcadoGames++;
              if (result.vitory) {
                this.ownAhorcadoVictories++;
              } else {
                this.ownAhorcadoDefeats++;
              }
            }
          }, 100);
        }
      }
    });
    this.authService.getCollection('mayorMenorResultados').subscribe((res) => {
      if (res != null) {
        this.mayorMenorResultList = res;
        this.mayorMenorGames = this.mayorMenorResultList.length;
        for (let i = 0; i < this.mayorMenorResultList.length; i++) {
          const result = this.mayorMenorResultList[i];
          if (result.victory) {
            this.mayorMenorVictories++;
          } else {
            this.mayorMenorDefeats++;
          }
          setTimeout(() => {
            if (result.user.userId == this.user.userId) {
              this.ownMayorMenorGames++;
              if (result.victory) {
                this.ownMayorMenorVictories++;
              } else {
                this.ownMayorMenorDefeats++;
              }
            }
          }, 100);
        }
      }
    });
    this.authService.getCollection('preguntadosResultados').subscribe((res) => {
      if (res != null) {
        this.preguntadosResultList = res;
        this.preguntadosGames = this.preguntadosResultList.length;
        for (let i = 0; i < this.preguntadosResultList.length; i++) {
          const result = this.preguntadosResultList[i];
          if (result.victory) {
            this.preguntadosVictories++;
          } else {
            this.preguntadosDefeats++;
          }
          setTimeout(() => {
            if (result.user.userId == this.user.userId) {
              this.ownPreguntadosGames++;
              if (result.victory) {
                this.ownPreguntadosVictories++;
              } else {
                this.ownPreguntadosDefeats++;
              }
            }
          }, 100);
        }
      }
    });
    this.authService
      .getCollection('juegoDeLaVidaResultados')
      .subscribe((res) => {
        if (res != null) {
          this.juegoDeLaVidaResultList = res;
          this.juegoDeLaVidaGames = this.juegoDeLaVidaResultList.length;
          for (let i = 0; i < this.juegoDeLaVidaResultList.length; i++) {
            const result = this.juegoDeLaVidaResultList[i];
            if (result.victory) {
              this.juegoDeLaVidaVictories++;
            } else {
              this.juegoDeLaVidaDefeats++;
            }
            setTimeout(() => {
              if (result.user.userId == this.user.userId) {
                this.ownJuegoDeLaVidaGames++;
                if (result.victory) {
                  this.ownJuegoDeLaVidaVictories++;
                } else {
                  this.ownJuegoDeLaVidaDefeats++;
                }
              }
            }, 100);
          }
        }
      });
  } // end of ngOnInit
}
