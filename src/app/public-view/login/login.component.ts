import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/models/user/UserLogin';
import { UserRegisterService } from 'src/app/services/userRegister/user-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string;
  name: string;

  token: string;
  login: string;
  progress = false;
  error = false;
  message: string;

  forma: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor(public _userService: UserRegisterService, public router: Router) {
    this.forma = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
   }

  ngOnInit() {
    this.login = localStorage.getItem('login');
  }

  formsIngresar(){
    const loginUser = new UserLogin(
      this.forma.value.email,
      this.forma.value.password,
    );

    this.progress = true;

    this._userService.login(loginUser).subscribe( (resp: any) => {
      this.guardarStorage(resp.remember_token, 'true', resp.user.id);
      this.progress = false;
      console.log(resp);
      if (resp.user.role === 'admin')
      {
        if (resp.user.autorizations)
        {
          localStorage.setItem('autorizations', JSON.stringify(resp.user.autorizations));
          localStorage.setItem('admin', 'true');
        }
        this.router.navigate(['videos']);
        return;
      }

      if (resp.user.role === 'user')
      {
        localStorage.setItem('user', 'true');
      }
      this.router.navigate(['videos']);
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.progress = false;
      this.error = true;
      this.message = error.error.message;
      console.log(error.error.message);
    });
  }

  butonregistrar(){}

  guardarStorage(token: string, login: string, id: string){
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('login', login);
    this.token = token;
    this.login = login;
  }


}
