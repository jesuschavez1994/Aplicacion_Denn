import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegisterService } from '../userRegister/user-register.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _userRegisterService: UserRegisterService){

    this._userRegisterService.cargarStorage();

  }

  canActivate() {

    this._userRegisterService.cargarStorage();

    if ( this._userRegisterService.estaLogueado() ){
      console.log('Paso por el login Guard');
      return true;
    }else{
      console.log('Bloqueado por el  Guard');
      return false;
    }
    return true;
  }
}
