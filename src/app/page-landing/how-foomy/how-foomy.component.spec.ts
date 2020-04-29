import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowFoomyComponent } from './how-foomy.component';

describe('HowFoomyComponent', () => {
  let component: HowFoomyComponent;
  let fixture: ComponentFixture<HowFoomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowFoomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowFoomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
