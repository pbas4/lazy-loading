import { Component, OnInit } from '@angular/core';

import { AppServices } from '../app.services';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor(private _appServices: AppServices) { }

  ngOnInit() {
    this._appServices.subjectReciver$.subscribe(
      res => console.log('from subject', res)
    );
  }

}
