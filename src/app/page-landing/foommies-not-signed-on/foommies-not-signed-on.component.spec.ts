import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoommiesNotSignedOnComponent } from './foommies-not-signed-on.component';

describe('FoommiesNotSignedOnComponent', () => {
  let component: FoommiesNotSignedOnComponent;
  let fixture: ComponentFixture<FoommiesNotSignedOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoommiesNotSignedOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoommiesNotSignedOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
