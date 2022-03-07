import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActionsComponent } from '../../general-layout/actions/actions.component';

@Component({
  selector: 'yh-sidebar-layout-header',
  templateUrl: './sidebar-layout-header.component.html',
  styleUrls: ['./sidebar-layout-header.component.scss'],
})
export class SidebarLayoutHeaderComponent implements OnInit {
  @ViewChild(ActionsComponent)
  actionsComponent: ActionsComponent;

  @Input()
  title: string;

  @Input()
  canClose: boolean = true;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  constructor() {}

  ngOnInit(): void {}

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
