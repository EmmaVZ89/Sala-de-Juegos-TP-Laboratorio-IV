import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCountriesService } from 'src/app/services/api-countries.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss'],
})
export class PreguntadosComponent implements OnInit {
  user: any = null;
  listOfCountries: any = [];
  listOfQuestions: any = [];
  victory: boolean = false;
  activeGame: boolean = false;
  gameOver: boolean = false;
  gameOverText: string = '┬íPERDISTE!';
  score: number = 0;
  attempts: number = 10;
  currentQuestion: any = null;
  loadedQuestions: boolean = false;
  currentIndex: number = 0;
  correctAnswer: boolean = false;
  wrongAnswer: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiPaises: ApiCountriesService,
    private notifyService: NotificationService
  ) {
    this.apiPaises.getPaises();
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(async (user: any) => {
      if (user) {
        this.user = user;
        if (user.rolUsuario == 'admin') {
          this.authService.isAdmin = true;
        }
        const paises = await this.apiPaises.getPaises();
        this.listOfCountries = paises.map((country: any) => {
          return {
            name: country.translations.spa.official,
            flag: country.flags.png,
          };
        });
        this.startGame();
      } else {
        this.router.navigate(['/login']);
      }
    });
  } // end of ngOnInit

  startGame() {
    this.generateQuestions();
    this.currentQuestion = this.listOfQuestions[this.currentIndex];
    this.activeGame = true;
    this.notifyService.showInfo('Juego iniciado', 'Preguntados');
  } // end of startGame

  generateQuestions() {
    this.listOfCountries.sort(() => Math.random() - 0.5);
    this.listOfQuestions = this.listOfCountries
      .slice(0, 10)
      .map((country: any) => {
        const option2 = this.listOfCountries[this.generateRandomNumber()].name;
        const option3 = this.listOfCountries[this.generateRandomNumber()].name;
        const option4 = this.listOfCountries[this.generateRandomNumber()].name;
        const options = [country.name, option2, option3, option4].sort(
          () => Math.random() - 0.5
        );
        return {
          answer: country.name,
          options: options,
          flag: country.flag,
        };
      });
    this.loadedQuestions = true;
  } // end of generateQuestions

  generateRandomNumber() {
    return Math.floor(Math.random() * 249);
  } // end of generateRandomNumber

  play(option: string, event: Event) {
    if (this.activeGame) {
      const btn = <HTMLButtonElement>event.target;
      btn.disabled = true;
      if (option === this.currentQuestion.answer) {
        this.score++;
        this.correctAnswer = true;
        setTimeout(() => {
          this.correctAnswer = false;
        }, 300);
        this.notifyService.showSuccess('┬íAdivinaste!', 'Preguntados');
      } else {
        this.wrongAnswer = true;
        setTimeout(() => {
          this.wrongAnswer = false;
        }, 300);
        this.notifyService.showError(
          `No adivinaste!, era ${this.currentQuestion.answer}`,
          'Preguntados'
        );
      }

      if (this.currentIndex < 9) {
        this.currentIndex++;
        setTimeout(() => {
          this.currentQuestion = this.listOfQuestions[this.currentIndex];
        }, 500);
      }

      if (this.attempts > 0) {
        this.attempts--;
        if (this.attempts === 0) {
          this.activeGame = false;
          this.gameOver = true;
          if (this.score >= 4) {
            this.victory = true;
            this.gameOverText = '┬íGANASTE!';
            this.notifyService.showSuccess('GANASTE!', 'Preguntados');
          } else {
            this.notifyService.showError('┬íPERDISTE!', 'Preguntados');
          }
          this.createResult();
        }
      }
    }
  } // end of play

  restartGame() {
    this.generateQuestions();
    this.currentIndex = 0;
    this.score = 0;
    this.attempts = 10;
    this.activeGame = true;
    this.victory = false;
    this.gameOver = false;
    this.gameOverText = '┬íPERDISTE!';
    this.currentQuestion = this.listOfQuestions[this.currentIndex];
    this.notifyService.showInfo('Juego Reiniciado', 'Preguntados');
  } // end of restartGame

  createResult() {
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const result = {
      game: 'preguntados',
      user: this.user,
      currentDate: currentDate,
      victory: this.victory,
    };
    this.authService
      .sendUserResult('preguntadosResultados', result)
      .then((res: any) => {
        console.log('Resultados Enviados!');
      })
      .catch((err: any) => {
        console.log('Error al enviar Resultados!');
      });
  } // end of createResult
}
