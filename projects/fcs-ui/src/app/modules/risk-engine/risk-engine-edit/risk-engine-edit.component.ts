import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, MenuItem } from 'primeng/api';
import * as faker from 'faker';
import { countryOptions } from '@fcs/app/domain/models/countries';
import { stateOptions } from '@fcs/app/domain/models/states';

@Component({
  selector: 'yh-risk-engine-edit',
  templateUrl: './risk-engine-edit.component.html',
  styleUrls: ['./risk-engine-edit.component.scss'],
})
export class RiskEngineEditComponent implements OnInit {
  // THIS IS JUST FOR ME TO SWAP THE VIEWS IN THIS PAGE SINCE THERE'S NO INTEGRATION
  // THIS IS NOW HOW TO HANDLE EDIT VS. VIEW
  isInEditMode: boolean = true;

  fgDataPoint: FormGroup;
  fcDataPoint: FormControl = new FormControl();

  items: MenuItem[] = [
    { label: 'Client' },
    { label: 'Account' },
    { label: 'Transactional' },
    { label: 'Geography' },
  ];

  activeItem: MenuItem;

  dataPoints: IDataPoint[] = [];

  countryOptions = countryOptions;

  stateOptions = stateOptions;

  saveOptionItems: MenuItem[] = [
    {
      label: 'Options',
      items: [
        {
          label: 'Save',
          icon: 'pi pi-save',
        },
        {
          label: 'Clone',
          icon: 'pi pi-copy',
        },
        { label: 'Cancel', icon: 'pi pi-times' },
        { separator: true },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: () => this.confirmDelete(),
        },
      ],
    },
  ];

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.fgDataPoint = this.fb.group({
      fcDataPoint: this.fcDataPoint,
    });

    this.dataPoints = Array.from(new Array(10), () => {
      return { name: faker.lorem.sentences(1) };
    });
  }

  private confirmDelete(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this Risk Analysis?',
      acceptButtonStyleClass: 'dialog-button-danger',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }
}

interface IDataPoint {
  name: string;
}
