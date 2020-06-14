import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDishDetailsComponent } from './page-not-logged-dish-details.component';

describe('PageDishDetailsComponent', () => {
  let component: PageDishDetailsComponent;
  let fixture: ComponentFixture<PageDishDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDishDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDishDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
