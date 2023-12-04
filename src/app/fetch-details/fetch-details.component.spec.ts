import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDetailsComponent } from './fetch-details.component';

describe('FetchDetailsComponent', () => {
  let component: FetchDetailsComponent;
  let fixture: ComponentFixture<FetchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchDetailsComponent]
    });
    fixture = TestBed.createComponent(FetchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
