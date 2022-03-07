import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IContact } from '@fcs/app/domain/models/contact';
import { ISubjectPhone } from '@fcs/app/domain/models/subject';
import * as faker from 'faker';
@Component({
  selector: 'yh-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();

  selectedContact: IContact;

  contacts: IContact[] = [];

  showContactForm: boolean = false;

  typeOptions: string[] = [
    'Law Enforcement',
    'Internal Contact',
    'External Contact / 314(b)',
    'Victim',
    'Other',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
    });

    for (var i = 0, max = 12; i < max; i++) {
      this.contacts.push(this.generateContact(i));
    }
  }
  selectContact(contact: IContact): void {
    this.showContactForm = false;

    if (this.selectedContact) {
      this.selectedContact.isSelected = false;
    }

    if (this.selectedContact === contact) {
      this.selectedContact = null;
    } else {
      this.selectedContact = contact;
      this.selectedContact.isSelected = true;
    }
  }
  handleAddNew(): void {
    this.selectedContact = null;
    this.showContactForm = true;
  }

  handleFormClose(event: MouseEvent): void {
    this.showContactForm = false;
  }

  handleDetailClose(event: MouseEvent): void {
    this.selectedContact = null;
  }

  handleDrawerCancel(): void {
    this.showContactForm = false;
  }

  handleOnHide(): void {}

  private generateContact(id: number): IContact {
    return {
      id: id,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: 'Owner / Partner Ronin Consulting',
      type: this.typeOptions[Math.floor(Math.random() * 5)],
      phone: '1231231234',
      phoneNumbers: Array.from(new Array(100), () =>
        this.generateSubjectPhone()
      ),
      websites: Array.from(new Array(100), () => faker.internet.url()),
      emailAddresses: Array.from(new Array(100), () => faker.internet.email()),
      identifications: Array.from(new Array(100), (k, i) => {
        return {
          id: i,
          country: 'USA',
          number: '123456789',
          state: 'TN',
          type: 'License',
        };
      }),
      addresses: Array.from(new Array(100), (k, i) => {
        return {
          id: i,
          address: '1234 Maple Drive.',
          city: 'Forest',
          state: 'TN',
          zipCode: '12345',
          country: 'USA',
          addressUnknown: false,
          cityUnknown: false,
          stateUnknown: false,
          zipCodeUnknown: false,
          countryUnknown: false,
        };
      }),
      isSelected: false,
    };
  }

  private generateSubjectPhone(): ISubjectPhone {
    return {
      phone: faker.phone.phoneNumberFormat(),
      extension: faker.datatype.number(),
      type: faker.name.jobType(),
    };
  }
}
