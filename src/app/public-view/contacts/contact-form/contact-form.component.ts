import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactModels } from 'src/app/models/contact/contact.models';
import { ContactService } from 'src/app/services/contact/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  login: string;
  forma: FormGroup;

  constructor(public router: Router,private conctactServices: ContactService) {

    this.forma = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('' , [Validators.required, Validators.pattern('[aA-zZ0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      phone: new FormControl(''),
      business: new FormControl(),
      description: new FormControl(),
    });

  }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }

  contact(){

    const user = new ContactModels(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.phone,
      this.forma.value.business,
      this.forma.value.description,
    );

    this.conctactServices.Conctact(user).subscribe( resp => {
      console.log(resp);
    })

  }

}
