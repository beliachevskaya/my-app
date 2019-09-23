import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  param: string = '4';

  constructor(private router: Router) { }

  setParam() {
    this.router.navigate(['example/params', this.param]);
  }

  ngOnInit() {
  }

}
