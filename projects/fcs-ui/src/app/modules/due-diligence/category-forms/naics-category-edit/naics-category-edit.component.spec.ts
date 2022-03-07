import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaicsCategoryEditComponent } from './naics-category-edit.component';

describe('NaicsCategoryEditComponent', () => {
  let component: NaicsCategoryEditComponent;
  let fixture: ComponentFixture<NaicsCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaicsCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaicsCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
