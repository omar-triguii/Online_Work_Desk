import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPerUserComponent } from './jobs-per-user.component';

describe('JobsPerUserComponent', () => {
  let component: JobsPerUserComponent;
  let fixture: ComponentFixture<JobsPerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsPerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsPerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
