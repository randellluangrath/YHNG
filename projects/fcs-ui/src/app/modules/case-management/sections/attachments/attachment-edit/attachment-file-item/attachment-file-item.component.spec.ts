import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentFileItemComponent } from './attachment-file-item.component';

describe('AttachmentFileItemComponent', () => {
  let component: AttachmentFileItemComponent;
  let fixture: ComponentFixture<AttachmentFileItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentFileItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentFileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
