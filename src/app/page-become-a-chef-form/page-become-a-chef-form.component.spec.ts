import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBecomeAChefFormComponent } from './page-become-a-chef-form.component';

describe('PageBecomeAChefFormComponent', () => {
  let component: PageBecomeAChefFormComponent;
  let fixture: ComponentFixture<PageBecomeAChefFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBecomeAChefFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBecomeAChefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
