import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotLoggedChefDetailsComponent } from './page-not-logged-chef-details.component';

describe('PageNotLoggedChefDetailsComponent', () => {
  let component: PageNotLoggedChefDetailsComponent;
  let fixture: ComponentFixture<PageNotLoggedChefDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotLoggedChefDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotLoggedChefDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
