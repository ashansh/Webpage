import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineNodesComponent } from './timeline-nodes.component';

describe('TimelineNodesComponent', () => {
  let component: TimelineNodesComponent;
  let fixture: ComponentFixture<TimelineNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
