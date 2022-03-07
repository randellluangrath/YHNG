import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISarCyberEvent } from '@fcs/app/domain/models/sar';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-sar-cyber-event-edit',
  templateUrl: './sar-cyber-event-edit.component.html',
  styleUrls: ['./sar-cyber-event-edit.component.scss'],
})
export class SarCyberEventEditComponent implements OnInit {
  @Output()
  onSave: EventEmitter<ISarCyberEvent> = new EventEmitter<ISarCyberEvent>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

  fgEvent: FormGroup;
  fcType: FormControl = new FormControl();
  fcTypeOther: FormControl = new FormControl();
  fcEventValue: FormControl = new FormControl();
  fcDate: FormControl = new FormControl();

  typeOptions: FieldOption<string>[] = [
    new FieldOption('', ''),
    new FieldOption('Other', 'Other'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgEvent = this.fb.group({
      fcType: this.fcType,
      fcTypeOther: this.fcTypeOther,
      fcEventValue: this.fcEventValue,
      fcDate: this.fcDate,
    });
  }

  cancelItem(): void {
    this.fgEvent.reset();
    this.onCancel.emit();
  }

  saveItem(): void {
    if (this.fgEvent.valid) {
      this.onSave.emit({
        type: this.fcType.value,
        typeOther: this.fcTypeOther.value,
        value: this.fcEventValue.value,
        occured: this.fcDate.value,
      });
    }
  }
}
