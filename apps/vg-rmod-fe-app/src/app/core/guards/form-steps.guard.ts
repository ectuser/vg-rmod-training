import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { InfoFacade } from '../../reducers/info/info.facade';

@Injectable({
  providedIn: 'root'
})
export class FormStepsGuard implements CanActivate {
  constructor(private infoFacade: InfoFacade, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.infoFacade.firstStepPassed$.pipe(map((passed) => {
      return passed || this.router.createUrlTree(['/registration/personal-information']);
    }));
  }
  
}
