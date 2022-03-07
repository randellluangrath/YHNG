import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import * as faker from 'faker';
import * as moment from 'moment';
import { Alert, AlertType, IAlertHistoryRecord } from '../domain/models/alerts';
import {
  Case,
  CaseStatus,
  CaseType,
  ICaseAuditRecord,
} from '../domain/models/case';
import { Client } from '../domain/models/clients';
import { ILocation } from '../domain/models/locations';
import {
  ISarFinancialIntstitution,
  ISarFinancialIntstitutionBranch,
  ISuspiciousActivityReport,
} from '../domain/models/sar';
import { ISubject, ISubjectPhone } from '../domain/models/subject';
import { ITransaction } from '../domain/models/transaction';
@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private transactionDescriptions: string[] = [
    'Wire Transfer Debit Fidelity Natl Title Ins Co 056009110 412221 Countrywide Bank IN TRUST FOR PATRICK JEFFERS REF: ESCROW # 22009318-LCB ',
    'Wire Transfer Debit Brian A Turney 026009593 332210415809 7909 Meadow Park Cir Wichita, KS Bank of America ',
    'Wire Transfer Debit Mark French 111000614 392632769065 5207 Sanford Road Houston, TX 77035 J.P. Morgan Chase 712 Main St. Houston, TX 77002 Consultant Fee',
    'Wire Transfer Debit Wind Energy Systems Technology 121000248 3112124064 Wells Fargo Bank ',
  ];

  private transactionMediums: string[] = ['ACH', 'Cash', 'Check', 'Wire'];

  private auditFeatures: string[] = [
    'Subjects',
    'Accounts',
    'Locations',
    'Contacts',
    'Notes',
    'Tasks',
  ];
  private auditActions: string[] = ['Added', 'Edited', 'Deleted'];

  private statuses: string[] = [
    'Open',
    'Closed',
    'Merged',
    'Pending',
    'Reopened',
    'SAR Filed',
  ];
  private types: string[] = [
    'BSA',
    'Fraud',
    'EDD Review',
    'Subpoena Review',
    'Watchlist',
  ];

  constructor() {}
  createTransaction(id: number): ITransaction {
    return {
      id: id,
      flagged: false,
      created: moment(faker.date.past()).toString(),
      account: faker.finance.account(14),
      batch: faker.random.number(),
      sequence: faker.random.number(),
      effective: moment(faker.date.soon()).toString(),
      description:
        this.transactionDescriptions[faker.datatype.number({ min: 0, max: 3 })],
      debit: faker.finance.amount(),
      credit: 0,
      medium:
        this.transactionMediums[faker.datatype.number({ min: 0, max: 3 })],
      occured: moment(faker.date.past()).toString(),
      serial: faker.finance.routingNumber(),
      code: 'posp',
    };
  }
  createAlertHistoryRecord(): IAlertHistoryRecord {
    return {
      created: moment(faker.date.past()).toString(),
      scenario: 'Large Wire over 30 Days',
      details:
        'Client alerted because Wire Out Volume was 65 transacations which is 87% of all credit activity of 75 transactions',
      risk: 90,
      status: 'Closed',
      closedBy: 'Jacob S.',
      closedReason: 'Normal Business Activity',
    };
  }

  createCaseAuditRecord(): ICaseAuditRecord {
    return {
      created: moment(faker.date.past()).toString(),
      user: 'John S.',
      action: this.auditActions[faker.datatype.number({ min: 0, max: 2 })],
      feature: this.auditFeatures[faker.datatype.number({ min: 0, max: 5 })],
      description:
        'Some super long description about the action that was taken.',
    };
  }

  createSarInstitution(): ISarFinancialIntstitution {
    return {
      id: UUID.UUID(),
      name: faker.company.companyName(),
      nameUnknown: false,
      type: 'Type',
      typeOther: 'Type Other',
      primaryFederalRegulator: 'Some Value',
      typeOfGaming: ['State licensed casino', 'Card club'],
      typeOfGamingOther: '',
      typeOfSecurities: [
        'Holding company',
        'Introducing broker-commodities',
        'Investment adviser',
        'self-clearing broker securities',
      ],
      typeOfSecuritiesOther: '',
      identificationType: '',
      identificationNumber: '',
      role: ['Selling location', 'Paying location'],
      alternateName: '',
      tin: '',
      tinUnknown: false,
      tinType: '',
      address: '',
      addressUnknown: false,
      city: '',
      cityUnknown: false,
      state: '',
      zipCode: '',
      zipCodeUnknown: false,
      country: '',
      countryUnknown: false,
      fileNumber: 'FN-548454',
      loss: faker.datatype.float(),
      branches: Array.from(new Array(3), () => {
        return this.createSarInstitutionBranch();
      }),
    };
  }

  createSarInstitutionBranch(): ISarFinancialIntstitutionBranch {
    return {
      address: '504 Autumn Springs Court',
      city: 'Franklin',
      state: 'TN',
      zipCode: '37067',
      country: 'US',
      role: ['Selling location', 'Paying location'],
      rssdNumber: '12345',
    };
  }

  createSubject(id: number): ISubject {
    const subjectType = id % 2 == 0 ? 'Individual' : 'Entity';

    return {
      id: id,
      type: subjectType,
      entityName: id % 2 == 1 ? faker.company.companyName() : '',
      firstName: faker.name.firstName(),
      middleName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      suffix: null,
      gender: 'Male',
      dateOfBirth: new Date().toUTCString(),
      alternateNames: Array.from(new Array(100), () => {
        if (subjectType == 'Individual') {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            middleInitial: faker.name.firstName(),
            entity: faker.company.companyName(),
          };
        } else {
          return {
            entity: faker.company.companyName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            middleInitial: faker.name.firstName(),
          };
        }
      }),
      phoneNumbers: Array.from(new Array(100), () =>
        this.generateSubjectPhone()
      ),
      websites: Array.from(new Array(100), () => {
        return { website: faker.internet.url() };
      }),
      emailAddresses: Array.from(new Array(100), () => {
        return { email: faker.internet.email() };
      }),
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

  createLocation(): ILocation {
    return {
      name: faker.company.companyName(),
      branchNumber: faker.random.number(),
      region: faker.random.number(),
      phone: '1231231233',
      address: {
        addressLineOne: '1234 Autumn Springs Ct',
        addressLineTwo: '',
        addressLineThree: '',
        city: 'Franklin',
        state: 'TN',
        zipCode: '37067',
      },
    };
  }

  createClient(): Client {
    const client = new Client();
    client.title = faker.name.findName();
    client.type = 'Individual';
    client.tin = faker.datatype.number(10000);
    client.riskScore = faker.datatype.number(100);
    (client.emails = Array.from(new Array(100), () => {
      return faker.internet.email();
    })),
      (client.phoneNumbers = Array.from(new Array(25), () => {
        return {
          phone: faker.phone.phoneNumberFormat(),
          extension: faker.datatype.number(),
          type: faker.name.jobType(),
        };
      }));
    client.addresses = Array.from(new Array(25), () => {
      return {
        addressLineOne: '1234 Bright Way',
        addressLineTwo: null,
        addressLineThree: null,
        city: 'Franklin',
        state: 'TN',
        country: 'US',
        zipCode: '37067',
      };
    });
    client.identifications = Array.from(new Array(100), (k, i) => {
      return {
        id: i,
        country: 'USA',
        number: '123456789',
        state: 'TN',
        type: 'License',
      };
    });

    return client;
  }

  createAlert(): Alert {
    const alert = new Alert();
    alert.id = faker.datatype.number(10000);
    alert.amount = Math.floor(Math.random() * 100000);
    alert.riskScore = Math.floor(Math.random() * 100);
    alert.scenario = 'Large Wire Over 30 Days';
    alert.scenarioType = 'Large Daily';
    alert.subType = 'Large Fixed Amount';
    alert.title = 'Guy Edwards';
    alert.timestamp = new Date().toUTCString();
    alert.status = faker.datatype.number({ min: 0, max: 2 });
    alert.type = alert.id % 2 == 0 ? AlertType.BSA : AlertType.Fraud;

    return alert;
  }

  createCase(): Case {
    const caseModel = new Case();
    caseModel.caseId = faker.datatype.number({ min: 0, max: 200 });
    caseModel.caseName = 'Case Name Goes Here';
    caseModel.dueDate = new Date();
    caseModel.openDate = new Date();
    caseModel.closeDate = new Date();
    caseModel.caseStatus = new CaseStatus();

    const caseStatusId: number = faker.datatype.number({ min: 0, max: 2 });
    caseModel.caseStatus.name = this.statuses[caseStatusId];
    caseModel.caseStatus.id = caseStatusId + 1;

    caseModel.caseType = new CaseType();
    caseModel.caseType.typeName =
      this.types[faker.datatype.number({ min: 0, max: 4 })];

    caseModel.primary = 'jwood';

    if (faker.datatype.number({ min: 0, max: 1 })) {
      caseModel.highPriority = true;
    }

    caseModel.caseDescription = faker.lorem.sentence(50);

    return caseModel;
  }

  createSAR(): ISuspiciousActivityReport {
    return {
      name: 'SAR Name',
      activityType: 'Activity Type',
      ipAddresses: [],
      cyberEvents: [],
      financialInstitutions: Array.from(new Array(4), () =>
        this.createSarInstitution()
      ),
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
