import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  onSubmit() {
    // this.apiService.login(this.loginForm.value).subscribe(res => {
    //   // localStorage.setItem('code', res['data']['code']);
    //   // localStorage.setItem('name', res['data']['name']);
    // });
    // this.router.navigate(['/system']);
    console.log(this.loginForm);
  }

}
