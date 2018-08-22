import { Component, OnInit } from '@angular/core';

import { AppServices } from '../app.services';

@Component({
  selector: 'app-subject-emitter',
  templateUrl: './subject-emitter.component.html',
  styleUrls: ['./subject-emitter.component.scss']
})
export class SubjectEmitterComponent implements OnInit {

  constructor(private _appServices: AppServices) { }

  ngOnInit() {
  }

  emitData() {
    this._appServices.emitSubject({ id: 123, name: 'Paco' });
  }

}
