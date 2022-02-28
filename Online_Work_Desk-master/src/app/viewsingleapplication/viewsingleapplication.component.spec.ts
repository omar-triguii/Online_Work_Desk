import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsingleapplicationComponent } from './viewsingleapplication.component';

describe('ViewsingleapplicationComponent', () => {
  let component: ViewsingleapplicationComponent;
  let fixture: ComponentFixture<ViewsingleapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsingleapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsingleapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
