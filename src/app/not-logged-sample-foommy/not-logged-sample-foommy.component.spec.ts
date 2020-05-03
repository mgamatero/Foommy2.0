import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedSampleFoommyComponent } from './not-logged-sample-foommy.component';

describe('NotLoggedSampleFoommyComponent', () => {
  let component: NotLoggedSampleFoommyComponent;
  let fixture: ComponentFixture<NotLoggedSampleFoommyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoggedSampleFoommyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedSampleFoommyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
