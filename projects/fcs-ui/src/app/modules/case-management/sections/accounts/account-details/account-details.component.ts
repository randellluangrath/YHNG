import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { IAccount, AccountType } from '@fcs/app/domain/models/account';
import { INote } from '@fcs/app/domain/models/note';
import { ConfirmationService } from 'primeng/api';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;
  @Input()
  account: IAccount;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @Output()
  onEdit: EventEmitter<IAccount> = new EventEmitter<IAccount>();

  AccountType = AccountType;

  fcComment: FormControl = new FormControl('');

  showCommentsForm: boolean;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  showForm(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }

  cancelItem(): void {
    this.overlayPanel.hide();
  }

  saveItem(note: INote): void {
    this.account.notes.push(note);
    this.overlayPanel.hide();
  }

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }

  editAccount(): void {
    this.onEdit.emit(this.account);
  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Remove Account',
      rejectLabel: 'Cancel',
      message: `Are you sure you want to remove this Account from the case?`,
      icon: 'pi pi-exclamation-triangle popconfirm-icon',
      accept: () => {
        //confirm action
      },
      reject: () => {
        //reject action
      },
    });
  }
}
