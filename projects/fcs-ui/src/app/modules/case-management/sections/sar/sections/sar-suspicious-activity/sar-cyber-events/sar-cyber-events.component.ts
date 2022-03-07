import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ISarCyberEvent,
  ISuspiciousActivityReport,
} from '@fcs/app/domain/models/sar';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-sar-cyber-events',
  templateUrl: './sar-cyber-events.component.html',
  styleUrls: ['./sar-cyber-events.component.scss'],
})
export class SarCyberEventsComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  @Input()
  sar: ISuspiciousActivityReport;

  trashed: Set<ISarCyberEvent> = new Set<ISarCyberEvent>();

  constructor() {}

  ngOnInit(): void {}

  showFormPanel(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }
  saveItem(item: ISarCyberEvent): void {
    this.sar.cyberEvents.push(item);
    this.overlayPanel.hide();
  }
  cancelItem(): void {
    this.overlayPanel.hide();
  }

  markForDelete(id: ISarCyberEvent): void {
    if (this.trashed.has(id)) {
      this.trashed.delete(id);
    } else {
      this.trashed.add(id);
    }
  }
}
