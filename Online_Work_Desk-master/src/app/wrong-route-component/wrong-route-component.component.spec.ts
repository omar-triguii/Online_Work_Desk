import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongRouteComponentComponent } from './wrong-route-component.component';

describe('WrongRouteComponentComponent', () => {
  let component: WrongRouteComponentComponent;
  let fixture: ComponentFixture<WrongRouteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongRouteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
