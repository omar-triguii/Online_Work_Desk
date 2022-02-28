import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicationsforeachjobComponent } from './viewapplicationsforeachjob.component';

describe('ViewapplicationsforeachjobComponent', () => {
  let component: ViewapplicationsforeachjobComponent;
  let fixture: ComponentFixture<ViewapplicationsforeachjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapplicationsforeachjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapplicationsforeachjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
