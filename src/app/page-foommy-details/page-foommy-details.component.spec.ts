import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFoommyDetailsComponent} from './page-foommy-details.component';

describe('PageFoommyDetailsComponent', () => {
  let component: PageFoommyDetailsComponent;
  let fixture: ComponentFixture<PageFoommyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFoommyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFoommyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
