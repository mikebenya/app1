import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
// import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Extreme Control | Login';
  durationInSeconds = 5;

  public userData = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  });

  constructor(
    // private _snackBar: MatSnackBar,
    private titleService: Title
  ) { }

  // openSnackBar() {
  //   this._snackBar.openFromComponent(LoginSnack, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }


  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }


  login() {
  }
}


@Component({
  selector: 'snack',
  templateUrl: 'snack.html',
  styles: [
    `
      .snack-login {
        color: white;
        font-size: 12px;
        text-align: center;
      }
    `,
  ],
})
export class LoginSnack { }
