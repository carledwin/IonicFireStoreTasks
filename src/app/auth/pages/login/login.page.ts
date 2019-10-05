import { AuthProvider } from './../../../core/services/auth.types';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  
  authForm: FormGroup;

  authProviders = AuthProvider;

  configs = { isSiginIn: true, action: 'Login', actionChange: 'Create account' };

  private nameControl = new FormControl(' ', [Validators.required, Validators.minLength(3)]);

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.formBuilder.group({
      email: [' ', [Validators.required, Validators.email]],
      password: [' ', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      //name: [' ', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
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

  async onSubmit(provider: AuthProvider): Promise<void> {
    
    try{

      const credentials = await this.authService.orchestrator({
        
        isSignIn: this.configs.isSiginIn,
        user: this.authForm.value,
        provider
      });

      console.log('AuthForm: ', this.authForm.value);

      console.log('Redirecting....');

    }catch(error){
      
      console.error('Auth error: ', error);
    }

  }

  changeAuthAction(): void {

    this.configs.isSiginIn = !this.configs.isSiginIn;
    
    const { isSiginIn } = this.configs;
    
    this.configs.action = isSiginIn ? 'Login' : 'Sign Up';
    
    this.configs.actionChange = isSiginIn ? 'Create account' : 'Already have an account';

    !isSiginIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }
}
