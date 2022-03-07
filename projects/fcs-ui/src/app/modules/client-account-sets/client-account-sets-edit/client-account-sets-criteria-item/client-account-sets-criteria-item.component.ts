import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-client-account-sets-criteria-item',
  templateUrl: './client-account-sets-criteria-item.component.html',
  styleUrls: ['./client-account-sets-criteria-item.component.scss'],
})
export class ClientAccountSetsCriteriaItemComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Delete Criteria',
      rejectLabel: 'Cancel',
      message: `Are you sure you want to remove this set of criteria?`,
      icon: 'pi pi-exclamation-triangle popconfirm-icon',
      accept: () => {
        //confirm action
      },
      reject: () => {
        //reject action
      },
    });
  }

  showMatches(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }
}
