import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryEditComponent } from './list-category-edit.component';

describe('ListCategoryEditComponent', () => {
  let component: ListCategoryEditComponent;
  let fixture: ComponentFixture<ListCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
