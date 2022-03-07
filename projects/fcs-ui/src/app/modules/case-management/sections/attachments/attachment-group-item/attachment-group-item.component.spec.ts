import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentGroupItemComponent } from './attachment-group-item.component';

describe('AttachmentGroupItemComponent', () => {
  let component: AttachmentGroupItemComponent;
  let fixture: ComponentFixture<AttachmentGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentGroupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
