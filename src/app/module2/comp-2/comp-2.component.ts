import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrls: ['./comp-2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  seeMyRoute() {
    // this._route.
  }

  redirect() {
    this._router.navigate(['comp-2', 'aasdfsdfs']);
  }

}
