
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  login(data: any) {
    const url = environment.server_url + 'login';
    return this._http.post(url, data);
  }

  getalltodo() {
    const url = environment.server_url + 'get_todo';
    return this._http.get(url);
  }
  addTask(data: any) {
    const url = environment.server_url + 'add_task';
    return this._http.post(url, data);
  }
  done(data: any) {
    const url = environment.server_url + 'done_task';
    return this._http.post(url, data);
  }
  delet(data: any) {
    const url = environment.server_url + 'delete_task';
    return this._http.post(url, data);
  }
  update(data: any) {
    const url = environment.server_url + 'update_task';
    return this._http.post(url, data);
  }


}
