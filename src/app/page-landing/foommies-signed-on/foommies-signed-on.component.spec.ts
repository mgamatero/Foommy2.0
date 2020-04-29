import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoommiesSignedOnComponent } from './foommies-signed-on.component';

describe('FoommiesSignedOnComponent', () => {
  let component: FoommiesSignedOnComponent;
  let fixture: ComponentFixture<FoommiesSignedOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoommiesSignedOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoommiesSignedOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
