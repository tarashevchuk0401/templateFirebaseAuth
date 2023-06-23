import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    public authService: AuthService
  ) { }

  authServiceSignIn(name: string, password: string){
    this.authService.SignIn(name, password)
  }

  authServiceGoogleAuth(){
    this.authService.GoogleAuth()
  }

}
