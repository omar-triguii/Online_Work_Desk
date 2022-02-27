import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeafterloginComponent } from './homeafterlogin.component';

describe('HomeafterloginComponent', () => {
  let component: HomeafterloginComponent;
  let fixture: ComponentFixture<HomeafterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeafterloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
