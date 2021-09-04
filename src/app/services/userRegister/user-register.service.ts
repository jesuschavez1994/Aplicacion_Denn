import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, URL_IMAGENES } from '../../config/config';
import { UserRegister, Password } from '../../models/user/user.model';
import { UserLogin } from '../../models/user/UserLogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  token: string;

  constructor(public http: HttpClient, public router: Router) { }


  private postQuery<T>(query: string, data: any){
    query = URL_SERVICIOS + query;
    return this.http.post<T>( query, data );
  }

  private execQuery<T>( query: string ) {
    query = URL_SERVICIOS + query;
    return this.http.get<T>( query );
  }

  private execGetIMG<T>( query: string ) {
    query = URL_IMAGENES + query;
    return this.http.get<T>( query );
  }

  private execPutquery<T>( query: string, data: any ) {
    query = URL_SERVICIOS + query;
    return this.http.put<T>( query, data );
  }

  // ======= SERVICIOS POST ====== //

  createUser(user: UserRegister){
    const url = 'register';
    return this.postQuery(url, user);
  }

  login(user: UserLogin){
    const url = 'login';
    return this.postQuery(url, user);
  }

  addAtachFiles(id: string, Files: any){
    const url = `users/${id}/files`;
    return this.postQuery(url, Files);
  }
  // ==================================//
  // ======= END SERVICIOS POST ====== //
  // ==================================//


  // ======= SERVICIOS GET ====== //

  logout() {
    const url = 'logout';
    return this.execQuery(url).subscribe( data => {
      this.token = '';
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('login');
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    });
  }

  DataGetTeacher(id: string){
    const url = `users/${id}`;
    return this.execQuery(url);
  }

  // ==================================//
  // ======= END SERVICIOS GET ====== //
  // ==================================//

  // ====== SERVICIOS PUT ======== //


  UpdatePassword(id: string, data: Password){
    const url = `users/${id}/passwords`;
    return this.postQuery(url, data);
  }

}
