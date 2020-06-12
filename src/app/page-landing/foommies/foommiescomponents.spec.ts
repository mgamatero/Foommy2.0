import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoommiesComponent } from './foommies.component';

describe('FoommiesComponent', () => {
  let component: FoommiesComponent;
  let fixture: ComponentFixture<FoommiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoommiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoommiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
