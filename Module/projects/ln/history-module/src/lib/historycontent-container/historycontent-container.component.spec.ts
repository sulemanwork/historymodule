import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorycontentContainerComponent } from './historycontent-container.component';

describe('HistorycontentContainerComponent', () => {
  let component: HistorycontentContainerComponent;
  let fixture: ComponentFixture<HistorycontentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorycontentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorycontentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
