import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWhyfoommyComponent } from './page-whyfoommy.component';

describe('PageWhyfoommyComponent', () => {
  let component: PageWhyfoommyComponent;
  let fixture: ComponentFixture<PageWhyfoommyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWhyfoommyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWhyfoommyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
