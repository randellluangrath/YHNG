import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioTagsEditComponent } from './scenario-tags-edit.component';

describe('ScenarioTagsEditComponent', () => {
  let component: ScenarioTagsEditComponent;
  let fixture: ComponentFixture<ScenarioTagsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioTagsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioTagsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
