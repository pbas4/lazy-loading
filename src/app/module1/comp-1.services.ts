import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class Comp1Services {

  constructor(private _http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this._http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

}
