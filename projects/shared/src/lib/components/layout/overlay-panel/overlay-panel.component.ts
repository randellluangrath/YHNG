import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'yh-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss'],
})
export class OverlayPanelComponent implements OnInit {
  @ViewChild(OverlayPanel)
  overlayPanel: OverlayPanel;

  @Input()
  dismissable: boolean;

  @Input()
  styleClass: string;

  constructor() {}

  ngOnInit(): void {}

  toggle(event: MouseEvent, target: EventTarget) {
    this.overlayPanel.show(event, target);
  }
  hide(): void {
    this.overlayPanel.hide();
  }
}
