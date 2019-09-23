import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-children',
  templateUrl: './parent-children.component.html',
  styleUrls: ['./parent-children.component.scss']
})
export class ParentChildrenComponent implements OnInit {
  name: string;
  totalFirstChild: number = 0;

  ngOnInit() {
  }

  onChanged(isChanged: boolean) {
    if (isChanged) {
      this.totalFirstChild++;
    } else {
      this.totalFirstChild--;
    }
  }

}
