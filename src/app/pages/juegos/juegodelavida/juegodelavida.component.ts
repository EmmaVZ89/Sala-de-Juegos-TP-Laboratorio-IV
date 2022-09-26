import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from '../../../models/board';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-juegodelavida',
  templateUrl: './juegodelavida.component.html',
  styleUrls: ['./juegodelavida.component.scss'],
})
export class JuegodelavidaComponent implements OnInit {
  user: any = null;
  numCols: number;
  numRows: number;
  generation: number;
  gameStatus: number; // -1 no empieza | 0 Activo | 1 Pausado
  actives: number;
  activesAnt: number;
  attempts: number;
  activeGame: boolean;
  gameOver: boolean;
  victory: boolean;
  gameOverText: string;

  board: Board;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotificationService
  ) {
    this.numCols = 22;
    this.numRows = 22;
    this.generation = 0;
    this.gameStatus = 0;
    this.actives = 0;
    this.activesAnt = 0;
    this.attempts = 20;
    this.activeGame = true;
    this.gameOver = false;
    this.victory = false;
    this.gameOverText = '¡PERDISTE!';

    this.board = new Board(this.numCols, this.numRows);
  } // end of contructor

  ngOnInit(): void {
    this.authService.user$.subscribe(async (user: any) => {
      if (user) {
        this.user = user;
      } else {
        this.router.navigate(['/login']);
      }
    });

    setInterval(() => {
      if (this.gameStatus === 0) {
        this.board.checkBoard();
        this.actives = this.board.countActives();

        if (this.actives !== this.activesAnt) {
          this.activesAnt = this.actives;
          this.generation++;
        }

        if (this.actives === 0) {
          this.gameStatus = 1;
          this.victory = true;
          this.activeGame = false;
          this.gameOver = true;
          this.gameOverText = '¡GANASTE!';
          this.createResult();
        }

        if (this.actives > 0 && this.attempts === 0) {
          this.gameStatus = 1;
          this.activeGame = false;
          this.gameOver = true;
          this.createResult();
        }
      }
    }, 150);
  } // end of ngOnInit

  onClick(pRow: number, pCol: number) {
    if (this.attempts - 1 >= 0) {
      this.attempts--;
      this.board.changeStatus(pRow, pCol);
    }
    if (this.attempts == 17) {
      this.notifyService.showWarning('Quizas debas esperar!', 'Pista', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
      });
    }
    if (this.attempts == 15) {
      this.notifyService.showWarning(
        'Recuerda, las celdas mueren por superpoblación',
        'Pista',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        }
      );
    }
    if (this.attempts == 10) {
      this.notifyService.showWarning('Elige bien que celda "matar"', 'Pista', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
      });
    }
    if (this.attempts == 5) {
      this.notifyService.showWarning(
        'Una celda muerta con exactamente 3 celdas vecinas vivas "nace" (es decir, al turno siguiente estará viva). Una celda viva con 2 o 3 celdas vecinas vivas sigue viva, en otro caso muere (por "soledad" o "superpoblación")',
        'Pista final',
        {
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
        }
      );
    }
  } // end of onClick

  restartGame() {
    this.generation = 0;
    this.gameStatus = 0;
    this.actives = 0;
    this.activesAnt = 0;
    this.attempts = 20;
    this.activeGame = true;
    this.gameOver = false;
    this.victory = false;
    this.gameOverText = '¡PERDISTE!';
    this.board = new Board(this.numCols, this.numRows);
    this.notifyService.showInfo('¡Juego Reiniciado!', 'Juego de la vida');
  } // end of restartGame

  createResult() {
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const result = {
      game: 'Juego de la Vida',
      user: this.user,
      currentDate: currentDate,
      victory: this.victory,
    };
    this.authService
      .sendUserResult('juegoDeLaVidaResultados', result)
      .then((res: any) => {
        console.log('Resultados Enviados!');
      })
      .catch((err: any) => {
        console.log('Error al enviar Resultados!');
      });
  } // end of createResult
}
