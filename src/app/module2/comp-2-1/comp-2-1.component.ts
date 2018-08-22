import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-2-1',
  templateUrl: './comp-2-1.component.html',
  styleUrls: ['./comp-2-1.component.scss']
})
export class Comp21Component implements OnInit {

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      res => console.log('params', res)
    );
  }

}
