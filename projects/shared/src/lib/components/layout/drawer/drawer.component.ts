import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'yh-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  visible: boolean;

  @Input()
  showCloseIcon: boolean;

  @Input()
  dismissible: boolean;

  @Input()
  closeOnEscape: boolean;

  @Input()
  width: string = '400px';

  //"left", "right", "bottom" and "top"
  @Input()
  position: string = 'right';

  @Input()
  fullscreen: boolean;

  @Input()
  pad: boolean = true;

  @Output()
  hide: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  enableActions: boolean;

  constructor() {}

  ngOnInit(): void {}

  handleOnHide(): void {
    this.hide.emit(true);
  }
}
