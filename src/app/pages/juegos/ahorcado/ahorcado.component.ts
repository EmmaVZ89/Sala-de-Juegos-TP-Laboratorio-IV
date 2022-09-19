import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent implements OnInit {
  user: any = null;
  buttonLetters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  listOfWords: string[] = [
    'GATO',
    'PERRO',
    'LEON',
    'ELEFANTE',
    'SERPIENTE',
    'COCODRILO',
  ];
  victory: boolean = false;
  activeGame: boolean = true;
  attempts: number = 6;
  score: number = 0;
  image: number | any = 0;
  word: string = '';
  hyphenatedWord: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private notifyService: NotificationService
  ) {
    this.word =
      this.listOfWords[
        Math.round(Math.random() * (this.listOfWords.length - 1))
      ];
    this.hyphenatedWord = Array(this.word.length).fill('_');
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.notifyService.showInfo('Juego iniciado', 'Ahorcado');
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  restartGame() {
    this.word =
      this.listOfWords[
        Math.round(Math.random() * (this.listOfWords.length - 1))
      ];
    this.hyphenatedWord = Array(this.word.length).fill('_');
    this.activeGame = true;
    this.attempts = 6;
    this.score = 0;
    this.image = 0;
    this.victory = false;
    this.notifyService.showInfo('Juego Reiniciado', 'Ahorcado');
  } // end of restartGame

  sendLetter(letter: string) {
    let letterFlag: boolean = false;
    let winGame: boolean = false;

    if (this.activeGame) {
      const alreadyGuessedLetterFlag: boolean = this.hyphenatedWord.some(
        (c) => c === letter
      );
      for (let i = 0; i < this.word.length; i++) {
        const wordLetter = this.word[i];
        if (wordLetter === letter && !alreadyGuessedLetterFlag) {
          this.hyphenatedWord[i] = letter;
          letterFlag = true;
          this.score++;
          winGame = this.hyphenatedWord.some((hyphen) => hyphen == '_');
          if (!winGame) {
            this.image = this.image + '_v';
            this.activeGame = false;
            this.victory = true;
            this.createResult();
            this.notifyService.showSuccess('GANASTE', 'Ahorcado');
            break;
          }
        }
      }

      if (!letterFlag && !alreadyGuessedLetterFlag) {
        if (this.attempts > 0) {
          this.attempts--;
          this.image++;
          this.notifyService.showError('¡NO adivinaste!', 'Ahorcado');
          if (this.attempts === 0) {
            this.notifyService.showError('PERDISTE', 'Ahorcado');
            this.activeGame = false;
            this.createResult();
          }
        }

        if (this.score > 0) {
          this.score--;
        }
      } else if (alreadyGuessedLetterFlag) {
        this.notifyService.showWarning('La letra ya fue adivinada', 'Ahorcado');
      } else if (letterFlag) {
        if(!this.victory) {
          this.notifyService.showSuccess('¡Adivinaste!', 'Ahorcado');
        }
      }
    } else {
      this.notifyService.showInfo(
        '¿Quieres seguir jugando?, reinicia el juego!',
        'Ahorcado'
      );
    }
  } // end of sendLetter

  createResult() {
    let date = new Date();
    let currentDate = date.toLocaleDateString();
    let result = {
      game: 'ahorcado',
      user: this.user,
      currentDate: currentDate,
      vitory: this.victory,
    };
    this.authService
      .sendUserResult('ahorcadoResultados', result)
      .then((res: any) => {
        console.log('Resultados Enviados!');
      })
      .catch((error: any) => {
        console.log('Error al enviar Resultados!');
      });
  } // end of createResult
}
