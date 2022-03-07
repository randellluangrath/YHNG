import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacisCodeComponent } from './nacis-code.component';

describe('NacisCodeComponent', () => {
  let component: NacisCodeComponent;
  let fixture: ComponentFixture<NacisCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacisCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacisCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
