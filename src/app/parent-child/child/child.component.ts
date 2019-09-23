import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  param: string;

  constructor(private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.param = params.param);
  }

}
