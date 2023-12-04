import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecordComponent } from './new-record.component';

describe('NewRecordComponent', () => {
  let component: NewRecordComponent;
  let fixture: ComponentFixture<NewRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRecordComponent]
    });
    fixture = TestBed.createComponent(NewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
