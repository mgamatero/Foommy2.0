import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTermsOfServiceComponent } from './page-terms-of-service.component';

describe('PageTermsOfServiceComponent', () => {
  let component: PageTermsOfServiceComponent;
  let fixture: ComponentFixture<PageTermsOfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTermsOfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTermsOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
