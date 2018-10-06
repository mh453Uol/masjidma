import { RegisterService } from './register.service';
import { PasswordValidator } from './../shared/validation/password-validator';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _registerService: RegisterService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'organisation': this.fb.group({
        'name': ['', Validators.required],
        'address': ['', Validators.required],
        'city': [''],
        'postcode': ['', Validators.required]
      }),
      'user': this.fb.group({
        'email': ['', Validators.compose([Validators.required, Validators.email])],
        'password': ['', Validators.required],
        'confirmPassword': ['', Validators.required]
      }, { validator: PasswordValidator.MatchPassword })
    });

  }

  get organisation(): FormGroup {
    return this.form.get('organisation') as FormGroup;
  }

  get user(): FormGroup {
    return this.form.get('user') as FormGroup;
  }

  onSubmit() {
    console.log(this.form.value);
    this._registerService.register(this.form.value)
      .subscribe(
        data => { console.log(data); },
        error => { alert('something went wrong'); }
      );
  }

}
