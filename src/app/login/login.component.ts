import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _loginService: LoginService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'password': ['', Validators.required]
    });
  }

  onSubmit() {
    this._loginService.login(this.form.value).subscribe(
      () => { console.log('Login Failed'); }
    )
  }

  log() {
    console.log(this.form);
  }

}
