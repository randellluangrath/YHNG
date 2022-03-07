import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'yh-drawer-header',
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.scss'],
})
export class DrawerHeaderComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  showCloseIcon: boolean = true;

  @Output()
  onClose: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  enableActions: boolean;

  constructor() {}

  ngOnInit(): void {}

  handleClose(): void {
    this.onClose.emit();
  }
}
