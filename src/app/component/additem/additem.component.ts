import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  newTask: FormGroup;
  constructor(private _rest: RestService,
    private _router: Router,
    private _tostr: ToastrService) {
    this.newTask = new FormGroup({
      task: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }
  add() {
    this._rest.addTask(this.newTask.value).subscribe((responce) => {
      console.log(responce);
      const resp = responce as any;
      this._tostr.success(resp['msg'], "Success")
      this._router.navigate(['/home', 'todolist']);
    }, (error) => {
      this._tostr.error('error to add task');
      console.log(error);
    })
  }
}
