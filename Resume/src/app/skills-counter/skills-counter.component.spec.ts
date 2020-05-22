import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCounterComponent } from './skills-counter.component';

describe('SkillsCounterComponent', () => {
  let component: SkillsCounterComponent;
  let fixture: ComponentFixture<SkillsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
