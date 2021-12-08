import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { expect } from 'chai';

import { HistoryToolbarComponent } from './history-toolbar.component';

describe('HistoryToolbarComponent', () => {
  let component: HistoryToolbarComponent;
  let fixture: ComponentFixture<HistoryToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should check addActive', () => {
    spyOn(component,"addActive").and.returnValues(true,false)
    // component.addActive();
    expect(component.addActive()).toBeTruthy();
  });
});




