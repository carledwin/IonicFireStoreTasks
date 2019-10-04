import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  
  authForm: FormGroup;

  configs = { isSiginIn: true, action: 'Login', actionChange: 'Create account' };

  private nameControl = new FormControl(' ', [Validators.required, Validators.minLength(3)]);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.formBuilder.group({
      email: [' ', [Validators.required, Validators.email]],
      password: [' ', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      name: [' ', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
  }

  get name(): FormControl {
    return <FormControl>this.authForm.get('name');
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.authForm.get('password');
  }

  onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }

  changeAuthAction(): void {
    this.configs.isSiginIn = !this.configs.isSiginIn;
    const { isSiginIn } = this.configs;
    this.configs.action = isSiginIn ? 'Login' : 'Sign Up';
    this.configs.action = isSiginIn ? 'Create account' : 'Already have an account';

    !isSiginIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }
}
