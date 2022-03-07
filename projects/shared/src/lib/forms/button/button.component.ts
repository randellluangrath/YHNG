import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSpinnerThird } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  disabled: boolean;

  @Input()
  secondary: boolean;

  @Input()
  information: boolean;

  @Input()
  success: boolean;

  @Input()
  pending: boolean;

  @Input()
  warning: boolean;

  @Input()
  danger: boolean;

  @Input()
  ghost: boolean;

  @Input()
  iconButton: boolean;

  @Input()
  text: boolean;

  @Input()
  bordered: boolean;

  @Input()
  loading: boolean;

  // Supports and icon library that has its fonts loaded
  @Input()
  icon: string;

  // Must be used in conjunction with an icon for prime-ng
  @Input()
  label: string;

  @Input()
  hoverType: 'information' | 'warning' | 'pending' | 'danger' | 'secondary';

  loadingIcon: IconDefinition = faSpinnerThird;

  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
