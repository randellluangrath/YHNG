import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocCategoryEditComponent } from './soc-category-edit.component';

describe('SocCategoryEditComponent', () => {
  let component: SocCategoryEditComponent;
  let fixture: ComponentFixture<SocCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
