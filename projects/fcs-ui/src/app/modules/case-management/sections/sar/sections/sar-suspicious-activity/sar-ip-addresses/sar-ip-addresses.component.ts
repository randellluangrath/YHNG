import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ISarSubjectIpAddress,
  ISuspiciousActivityReport,
} from '@fcs/app/domain/models/sar';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-sar-ip-addresses',
  templateUrl: './sar-ip-addresses.component.html',
  styleUrls: ['./sar-ip-addresses.component.scss'],
})
export class SarIpAddressesComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  @Input()
  sar: ISuspiciousActivityReport;

  trashed: Set<ISarSubjectIpAddress> = new Set<ISarSubjectIpAddress>();

  constructor() {}

  ngOnInit(): void {}

  showFormPanel(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }
  saveItem(item: ISarSubjectIpAddress): void {
    this.sar.ipAddresses.push(item);
    this.overlayPanel.hide();
  }
  cancelItem(): void {
    this.overlayPanel.hide();
  }

  markForDelete(id: ISarSubjectIpAddress): void {
    if (this.trashed.has(id)) {
      this.trashed.delete(id);
    } else {
      this.trashed.add(id);
    }
  }
}
