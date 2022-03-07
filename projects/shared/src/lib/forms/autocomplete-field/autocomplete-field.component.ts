import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AutoCompleteFieldOption, FieldOption } from '../../models/models';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
  styleUrls: ['./autocomplete-field.component.css'],
})
export class AutocompleteFieldComponent
  extends BaseFieldComponent
  implements OnInit
{
  @Input()
  options: AutoCompleteFieldOption[] = [];

  @Output()
  onComplete: EventEmitter<AutoCompleteFieldOption> = new EventEmitter<AutoCompleteFieldOption>();

  filteredOptions: AutoCompleteFieldOption[];

  constructor() {
    super();
  }

  ngOnInit(): void {}

  selectOption(value: AutoCompleteFieldOption): void {
    this.onComplete.emit(value);
  }

  handleComplete(e: any): void {
    this.filteredOptions = this.options.filter(
      (o) =>
        `${o.label} ${o.secondaryLabel}`
          .toLowerCase()
          .indexOf(e.query.toLowerCase()) > -1
    );
  }
}
