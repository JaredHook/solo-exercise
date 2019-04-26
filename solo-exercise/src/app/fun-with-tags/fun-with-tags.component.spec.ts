import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunWithTagsComponent } from './fun-with-tags.component';

describe('FunWithTagsComponent', () => {
  let component: FunWithTagsComponent;
  let fixture: ComponentFixture<FunWithTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunWithTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunWithTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
