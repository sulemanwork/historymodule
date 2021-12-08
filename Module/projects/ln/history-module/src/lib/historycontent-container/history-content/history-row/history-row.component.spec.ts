import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRowComponent } from './history-row.component';

describe('HistoryRowComponent', () => {
  let component: HistoryRowComponent;
  let fixture: ComponentFixture<HistoryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
//   it('should check function', () => {
//     expect(component.sortData).toBeTrue();
//   });

});
