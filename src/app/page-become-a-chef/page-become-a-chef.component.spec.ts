import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBecomeAChefComponent } from './page-become-a-chef.component';

describe('PageBecomeAChefComponent', () => {
  let component: PageBecomeAChefComponent;
  let fixture: ComponentFixture<PageBecomeAChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBecomeAChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBecomeAChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
