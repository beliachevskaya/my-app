import { Component, OnInit, Input } from '@angular/core';

import { ShareService } from '../share.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
  count: number = 0;

  @Input() userName: string;

  constructor(private share: ShareService) {
    this.share.onClick.subscribe(cnt => this.count = cnt);
  }

  ngOnInit() {
  }

  increase(): void {
    this.share.doClickIncrease();
  }

  decrease(): void {
    this.share.doClickDecrease();
  }

}
