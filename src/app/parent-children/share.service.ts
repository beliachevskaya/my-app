import { EventEmitter } from '@angular/core';

export class ShareService {
  private clickCnt: number = 0;
  onClick: EventEmitter<number> = new EventEmitter();

  doClickIncrease() {
    this.clickCnt++;
    this.onClick.emit(this.clickCnt);
  }

  doClickDecrease() {
    this.clickCnt--;
    this.onClick.emit(this.clickCnt);
  }

}
