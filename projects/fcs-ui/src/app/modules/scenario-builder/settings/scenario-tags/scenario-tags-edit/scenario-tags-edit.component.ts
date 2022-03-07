import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'yh-scenario-tags-edit',
  templateUrl: './scenario-tags-edit.component.html',
  styleUrls: ['./scenario-tags-edit.component.scss'],
})
export class ScenarioTagsEditComponent implements OnInit {
  fgTag: FormGroup;
  fcName: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgTag = this.fb.group({ fcName: this.fcName });
  }
}
