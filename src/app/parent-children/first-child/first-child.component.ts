import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  count: number = 0;
  @Output() isClicked = new EventEmitter<boolean>();
  @Input() userName: string;

  ngOnInit() {
  }

  increase(): void {
    this.count++;
    this.isClicked.emit(true);
  }

  decrease(): void {
    this.count--;
    this.isClicked.emit(false);
  }

}
