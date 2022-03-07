import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yh-enhanced-due-diligence-comment-form',
  templateUrl: './enhanced-due-diligence-comment-form.component.html',
  styleUrls: ['./enhanced-due-diligence-comment-form.component.scss'],
})
export class EnhancedDueDiligenceCommentFormComponent implements OnInit {
  fgNote: FormGroup;
  fcNote: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgNote = this.fb.group({
      fcNote: this.fcNote,
    });
  }
}
