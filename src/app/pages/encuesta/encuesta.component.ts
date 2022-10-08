import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
})
export class EncuestaComponent implements OnInit {
  user: any = null;
  surveyForm: FormGroup;
  validNewGame: string | boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.validNewGame = false;
    this.surveyForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      nuevoJuegoTateti: [true],
      nuevoJuegoMemotest: [false],
      nuevoJuegoPPT: [false],
      juegoFavorito: ['ahorcado'],
      recomiendaPagina: ['', [Validators.required]],
    });
  } // end of constructor

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.user = user;
      } else {
        this.router.navigate(['/login']);
      }
    });
  } // end of ngOnInit

  sendForm() {
    if (this.surveyForm.valid) {
      if (this.validateNewGame()) {
        this.createSurveyForm();
        this.surveyForm.reset({
          nombre: '',
          apellido: '',
          edad: '',
          telefono: '',
          nuevoJuegoTateti: true,
          nuevoJuegoMemotest: false,
          nuevoJuegoPPT: false,
          juegoFavorito: 'ahorcado',
          recomiendaPagina: '',
        });
      } else {
        this.showNewGameValidationMessage();
        this.notificationService.showWarning(
          'Debes completar todos los campos requeridos',
          'Encuesta'
        );
      }
    } else {
      this.showNewGameValidationMessage();
      this.notificationService.showWarning(
        'Debes completar todos los campos requeridos',
        'Encuesta'
      );
    }
  } // end of sendForm

  showNewGameValidationMessage() {
    const tateti = this.surveyForm.value.nuevoJuegoTateti;
    const memoTest = this.surveyForm.value.nuevoJuegoMemotest;
    const ppt = this.surveyForm.value.nuevoJuegoPPT;
    if (!tateti && !memoTest && !ppt) {
      this.validNewGame = 'Se debe elegir al menos una opción';
    } else {
      this.validNewGame = false;
    }
  } // end of showNewGameValidationMessage

  validateNewGame(): boolean {
    const tateti = this.surveyForm.value.nuevoJuegoTateti;
    const memoTest = this.surveyForm.value.nuevoJuegoMemotest;
    const ppt = this.surveyForm.value.nuevoJuegoPPT;
    if (!tateti && !memoTest && !ppt) {
      return false;
    }
    return true;
  } // end of validateNewGame

  createSurveyForm() {
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const survey = {
      type: 'encuesta',
      user: this.user,
      currentDate: currentDate,
      survey: this.surveyForm.value,
    };
    this.authService
      .sendUserResult('encuestas', survey)
      .then((res) => {
        this.notificationService.showSuccess(
          'Encuesta enviada con exito!',
          'Encuesta'
        );
      })
      .catch((err) => {
        this.notificationService.showError(
          'Error al enviar la encuesta',
          'Encuesta'
        );
      });
  } // end of createSurveyForm
}
