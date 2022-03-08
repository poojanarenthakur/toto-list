import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public toastr: ToastrService,
    private _rest: RestService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      this._rest.login(this.loginForm.value).subscribe(resp => {
        this.toastr.success('login successfully');
        console.log(resp);
        const res = resp as any;
      },
        err => {
          this.toastr.error("Invalid username and password");
        })
    } else {
      this.toastr.error("Invalid Credential");
    }
  }
}
