import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@core/services';

@Injectable({ providedIn: 'root' })
export class LoggedGuard implements CanActivate {

  private isLogged = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
      this.authenticationService.isLogged().subscribe(res => this.isLogged = res);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLogged) {
            // logged in so return true
            this.router.navigate(['/catalog']);
            return false;
        }

        // if not token go to login
        return true;
    }
}
