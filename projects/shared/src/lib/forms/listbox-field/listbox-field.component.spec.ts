import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxFieldComponent } from './listbox-field.component';

describe('ListboxFieldComponent', () => {
  let component: ListboxFieldComponent;
  let fixture: ComponentFixture<ListboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListboxFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
