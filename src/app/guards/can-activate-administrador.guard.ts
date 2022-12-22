import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateAdministradorGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.authService.user$.subscribe((user: any) => {
      if (!user) {
        this.router.navigate(['']);
      }
      if (user.rolUsuario == 'admin') {
        this.authService.isAdmin = true;
      }
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAdmin) {
      this.notificationService.showInfo(
        'Eres Administrador, puedes ingresar',
        'Respuestas Encuesta'
      );
      return true;
    }
    this.notificationService.showWarning(
      'NO eres ADMINISTRADOR, cierra sesión e ingresa como ADMINISTRADOR',
      'Respuesta Encuesta'
    );
    this.router.navigate(['']);
    return false;
  }
}
