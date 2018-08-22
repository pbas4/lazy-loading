import { Component, OnInit, OnDestroy } from '@angular/core';

import { Comp1Services } from '../comp-1.services';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrls: ['./comp-1.component.scss']
})
export class Comp1Component implements OnInit, OnDestroy {

  private httpCall: any;

  constructor(private _services: Comp1Services) { }

  ngOnInit() {
    this.httpCall = this._services.getUsers().subscribe(
      res => {
        console.log('res', res);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  ngOnDestroy(): void {
    this.httpCall.unsubscribe();
  }

}
