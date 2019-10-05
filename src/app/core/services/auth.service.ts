import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User, AuthProvider, AuthOptions } from './auth.types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  constructor(private aFAuth: AngularFireAuth) {

    this.authState$ = this.aFAuth.authState;
   }

  get isAuthenticated(): Observable<boolean>{

    return this.authState$.pipe(map( user => user !== null));
  }

  orchestrator({isSignIn, provider, user}: AuthOptions): Promise<auth.UserCredential>{

    let operation: Promise<auth.UserCredential>;

    if(provider !== AuthProvider.Email){

      operation = this.signInWithPopup(provider);
    }else{

      operation = isSignIn ? this.signInWithEmailAndPassword(user): this.signUpWithEmail(user);
    }

    return operation;
  }

  logout(): Promise<void>{

    return this.aFAuth.auth.signOut();
  }

  private signInWithEmailAndPassword({email, password}: User): Promise<auth.UserCredential>{
    
    return this.aFAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmail({email, password, name}: User): Promise<auth.UserCredential>{
    
    return this.aFAuth.auth.createUserWithEmailAndPassword(email, password)
                            .then(credentials => credentials.user.updateProfile({
                                                                    displayName: name,
                                                                    photoURL: null
                                                                  })
                                                                  .then(() => credentials)
                            );
  }

  private signInWithPopup(provider: AuthProvider): Promise<auth.UserCredential>{

    let signInProvider = null;

    switch(provider){

      case AuthProvider.Facebook: 
        
      signInProvider = new auth.FacebookAuthProvider();
      break;
    }

    return this.aFAuth.auth.signInWithPopup(signInProvider);
  }
}
