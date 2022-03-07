import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCriteriaComponent } from './type-criteria.component';

describe('TypeCriteriaComponent', () => {
  let component: TypeCriteriaComponent;
  let fixture: ComponentFixture<TypeCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
