import { Component, OnInit, Input } from '@angular/core';

import { ShareService } from '../share.service';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss']
})
export class ThirdChildComponent implements OnInit {
  resultSecondChild: number = 0;

  @Input() resultFirstChild: number;

  constructor(private share: ShareService) {
    this.share.onClick.subscribe(cnt => this.resultSecondChild = cnt);
  }

  ngOnInit() {
  }

}
