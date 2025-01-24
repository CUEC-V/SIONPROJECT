import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};


export const AuthGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthenticatedOk()) {
    router.navigateByUrl('/login');
    return false;
  }
  let myObj = true ;
  localStorage.setItem('MANAGE', JSON.stringify(myObj));
  // Read item:
  //let item = JSON.parse(localStorage.getItem(key));
  return true
}