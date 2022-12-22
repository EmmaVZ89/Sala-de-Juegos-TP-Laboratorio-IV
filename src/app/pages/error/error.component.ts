import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  exclamationIcon = faCircleExclamation;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['']);
  }
}
