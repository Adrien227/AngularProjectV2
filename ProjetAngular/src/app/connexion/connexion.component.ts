import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  login =  new FormControl('', [Validators.required]);
  password =  new FormControl('', [Validators.required]);

  hide = true;

  constructor(public myapp: AppComponent) { }

  ngOnInit(): void {
  }

  verifForm() {
    if (this.login.hasError('required') || this.password.hasError('required')) {
      return true;
    } else {
      return false;
    }
  }

}
