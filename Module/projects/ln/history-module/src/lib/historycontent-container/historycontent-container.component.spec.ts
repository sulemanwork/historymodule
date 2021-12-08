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
  
  it('should Check Title', () => {
    expect(component.title).toBe("history content container");
  });
  
  it('should Check Function', () => {
    expect(component.sum(50, 50)).toBe(100);
  });
  
  it('should Check Html Elements', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".testing").textContent).toContain("Testing data")
  });
});
