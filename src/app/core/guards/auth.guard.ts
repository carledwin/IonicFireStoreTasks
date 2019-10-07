import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, 
          RouterStateSnapshot, 
          Router, 
          CanActivate, 
          CanActivateChild, 
          CanLoad, 
          Route, 
          UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{
  
  constructor(private authService: AuthService, private router: Router){}

  canActivate(activateRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<boolean>{

    return this.checkAuthState(routerStateSnapshot.url);
  }

  canActivateChild(activateRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<boolean>{

    return this.canActivate(activateRouteSnapshot, routerStateSnapshot);
  }

  canLoad(route: Route, urlSegments: UrlSegment[]): Observable<boolean>{

    const url = urlSegments.map(s => `/${s}`).join('');

    return this.checkAuthState(url).pipe(take(1));
  }

  private checkAuthState(redirect: string): Observable<boolean>{

    return this.authService.isAuthenticated.pipe(

      tap(is => {

        if(!is){

          this.router.navigate(['/login'], {
            queryParams: {redirect}
          })
        }
      })
    );
  }
}
