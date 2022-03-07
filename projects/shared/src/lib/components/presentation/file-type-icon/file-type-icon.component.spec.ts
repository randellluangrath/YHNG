import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTypeIconComponent } from './file-type-icon.component';

describe('FileTypeIconComponent', () => {
  let component: FileTypeIconComponent;
  let fixture: ComponentFixture<FileTypeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileTypeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
