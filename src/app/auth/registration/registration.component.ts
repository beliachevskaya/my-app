import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomValidators, ConfirmValidParentMatcher, regExps } from '../custom-validation';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isPasswordHide = true;
  isConfirmPasswordHide = true;
  registrationForm: FormGroup;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['',  [
        Validators.required,
        Validators.maxLength(30)]],
      emailOrPhone: ['', [
        Validators.required,
        Validators.pattern(regExps.emailOrPhone)]],
      passwordGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, { validator: CustomValidators.childrenEqual})
    });
  }

  onSubmit() {
    this.authService.signUp(this.registrationForm.value);
    console.log(this.registrationForm.value);
  }
}
