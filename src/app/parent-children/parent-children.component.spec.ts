import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildrenComponent } from './parent-children.component';

describe('ParentChildrenComponent', () => {
  let component: ParentChildrenComponent;
  let fixture: ComponentFixture<ParentChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
