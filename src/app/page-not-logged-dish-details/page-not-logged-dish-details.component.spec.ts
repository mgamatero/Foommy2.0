import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotLoggedDishDetailsComponent } from './page-not-logged-dish-details.component';

describe('PageNotLoggedDishDetailsComponent', () => {
  let component: PageNotLoggedDishDetailsComponent;
  let fixture: ComponentFixture<PageNotLoggedDishDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotLoggedDishDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotLoggedDishDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
