import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioTagsComponent } from './scenario-tags.component';

describe('ScenarioTagsComponent', () => {
  let component: ScenarioTagsComponent;
  let fixture: ComponentFixture<ScenarioTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
