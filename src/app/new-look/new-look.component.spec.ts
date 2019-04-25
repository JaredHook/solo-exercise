import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLookComponent } from './new-look.component';

describe('NewLookComponent', () => {
  let component: NewLookComponent;
  let fixture: ComponentFixture<NewLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
