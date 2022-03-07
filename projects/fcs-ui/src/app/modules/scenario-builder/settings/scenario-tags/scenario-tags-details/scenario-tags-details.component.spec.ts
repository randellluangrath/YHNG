import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioTagsDetailsComponent } from './scenario-tags-details.component';

describe('ScenarioTagsDetailsComponent', () => {
  let component: ScenarioTagsDetailsComponent;
  let fixture: ComponentFixture<ScenarioTagsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioTagsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioTagsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
