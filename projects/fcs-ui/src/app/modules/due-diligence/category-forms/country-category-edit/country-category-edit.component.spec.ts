import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCategoryEditComponent } from './country-category-edit.component';

describe('CountryCategoryEditComponent', () => {
  let component: CountryCategoryEditComponent;
  let fixture: ComponentFixture<CountryCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
