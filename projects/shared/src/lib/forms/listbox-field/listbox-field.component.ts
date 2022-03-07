import { Component, Input, OnInit } from '@angular/core';
import { FieldOption } from '../../models/models';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-listbox-field',
  templateUrl: './listbox-field.component.html',
  styleUrls: ['./listbox-field.component.css'],
})
export class ListboxFieldComponent
  extends BaseFieldComponent
  implements OnInit
{
  @Input()
  options: FieldOption<string | number>[] = [];

  @Input()
  showFilter: boolean = true;

  @Input()
  showToggleAll: boolean = true;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
