import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { ScrollSpyService } from 'ngx-scrollspy';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-sar-suspicious-activity',
  templateUrl: './sar-suspicious-activity.component.html',
  styleUrls: ['./sar-suspicious-activity.component.scss'],
})
export class SarSuspiciousActivityComponent implements OnInit {
  @Input()
  sar: ISuspiciousActivityReport;

  circleIcon: IconDefinition = faCircle;

  fgActivity: FormGroup;
  fcDollarAmount: FormControl = new FormControl();
  fcAmountInvolved: FormControl = new FormControl({
    disabled: true,
    value: null,
  });

  fcCommodityType: FormControl = new FormControl();
  fcProductInstrumentDescription: FormControl = new FormControl();
  fcMarketWhereTraded: FormControl = new FormControl();
  fcCusipNumber: FormControl = new FormControl();

  fcDateOption: FormControl = new FormControl();
  fcDateOfActivity: FormControl = new FormControl();

  faStructuring: FormArray;
  fcStructuringOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faTerroristFinancing: FormArray;
  fcTerroristFinancingOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faFraud: FormArray;
  fcFraudOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faGamingActivities: FormArray;
  fcGamingActivitiesOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faMoneyLaundering: FormArray;
  fcMoneyLaunderingOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faIdentification: FormArray;
  fcIdentificationOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faOtherActivities: FormArray;
  fcOtherActivitiesOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faInsurance: FormArray;
  fcInsuranceOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faSecurities: FormArray;
  fcSecuritiesOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faMortgageFraud: FormArray;
  fcMortgageFraudOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faCyberEvent: FormArray;
  fcCyberEventOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faProductTypes: FormArray;
  fcProductTypesOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  faInstrumentTypes: FormArray;
  fcInstrumentTypesOther: FormControl = new FormControl({
    disabled: true,
    value: '',
  });

  amountInvolvedOptions: FieldOption<string>[] = [
    new FieldOption('Yes', 'Yes'),
    new FieldOption('No', 'No'),
    new FieldOption('Unknown', 'Unknown'),
  ];

  rangeOptions: FieldOption<string>[] = [
    new FieldOption('Date', 'Date'),
    new FieldOption('Range', 'Range'),
  ];

  structuringOptions: FieldOption<string>[] = [
    new FieldOption(
      'Alters or cancels Transaction to avoid BSA recordkeeping requirement',
      ''
    ),
    new FieldOption(
      'Alters or cancels transaction to avoid CTR requirement',
      ''
    ),
    new FieldOption(
      'Suspicious inquiry by customer regarding BSA reporting or recordkeeping requirements',
      ''
    ),
    new FieldOption('Transaction(s) below BSA recordkeeping threshold', ''),
    new FieldOption('Transaction(s) below CTR threshold', ''),
    new FieldOption('Other', ''),
  ];
  terroristFinancingOptions: FieldOption<string>[] = [
    new FieldOption('Known or suspected terrorist/terrorist organization', ''),
    new FieldOption('Other', ''),
  ];
  fraudOptions: FieldOption<string>[] = [
    new FieldOption('ACH', ''),
    new FieldOption('Advance fee', ''),
    new FieldOption('Business loan', ''),
    new FieldOption('Check', ''),
    new FieldOption('Consumer loan', ''),
    new FieldOption('Credit/Debit Card', ''),
    new FieldOption('Healthcare/Public or private health insurance', ''),
    new FieldOption('Mail', ''),
    new FieldOption('Mass-marketing', ''),
    new FieldOption('Ponzi scheme', ''),
    new FieldOption('Pyramid scheme', ''),
    new FieldOption('Securities fraud', ''),
    new FieldOption('Wire', ''),
    new FieldOption('Other', ''),
  ];
  gamingActivitiesOptions: FieldOption<string>[] = [
    new FieldOption('Chip walking', ''),
    new FieldOption('Minimal gaming with large transactions', ''),
    new FieldOption('Suspicious use of counter checks or markers', ''),
    new FieldOption('Unknown source of chips', ''),
    new FieldOption('Other', ''),
  ];
  moneyLaunderingOptions: FieldOption<string>[] = [
    new FieldOption('Exchange small bills for large bills or vice versa', ''),
    new FieldOption('Funnel account', ''),
    new FieldOption('Suspicion concerning the physical condition of funds', ''),
    new FieldOption('Suspicion concering the source of funds', ''),
    new FieldOption(
      'Suspicious designation of beneficiaries, assignees or joint owners',
      ''
    ),
    new FieldOption('Suspicious EFT/wire transfers', ''),
    new FieldOption('Suspicious exchange of currencies', ''),
    new FieldOption('Suspicious receipt of government payment/benefits', ''),
    new FieldOption('Suspicious use of multiple accounts', ''),
    new FieldOption('Suspicious use of noncash monetary instruments', ''),
    new FieldOption(
      'Suspicious use of third-party transactors (straw-man)',
      ''
    ),
    new FieldOption(
      'Trade Based Money Laundering/Black Market Peso Exchange',
      ''
    ),
    new FieldOption('Transaction out of pattern for customer(s)', ''),
    new FieldOption('Other', ''),
  ];
  identificationOptions: FieldOption<string>[] = [
    new FieldOption('Changes spelling or arrangement of name', ''),
    new FieldOption('Multiple individuals with same or similar identities', ''),
    new FieldOption('Provided questionable or false documentation', ''),
    new FieldOption('Provided questionable or false identification', ''),
    new FieldOption('Refused or avoided request for documentation', ''),
    new FieldOption('Single individual with multiple identities', ''),
    new FieldOption('Other', ''),
  ];
  otherSuspiciousActivityOptions: FieldOption<string>[] = [
    new FieldOption('Account takeover', ''),
    new FieldOption('Bribery or gratuity', ''),
    new FieldOption('Counterfeit instruments', ''),
    new FieldOption('Elder financial exploitation', ''),
    new FieldOption('Embezzlement/theft/disappearance of funds', ''),
    new FieldOption('Forgeries', ''),
    new FieldOption('Human smuggling', ''),
    new FieldOption('Human trafficking', ''),
    new FieldOption('Identity theft', ''),
    new FieldOption(
      'Little or no concern for product performance penalties, fees, or tax consequences',
      ''
    ),
    new FieldOption('Misuse of position or self-dealing', ''),
    new FieldOption('Suspected public/private corruption (domestic)', ''),
    new FieldOption('Suspected public/private corruption (foreign)', ''),
    new FieldOption('Suspicious use of informal value transfer', ''),
    new FieldOption('Suspicious use of multiple transaction locations', ''),
    new FieldOption(
      'Transaction with no apparent economic business, or lawful purpose',
      ''
    ),
    new FieldOption(
      'Transaction(s) involving foreign high risk jurisdiction',
      ''
    ),
    new FieldOption('Two or more individuals working together', ''),
    new FieldOption('Unlicensed of unregistered MSB', ''),
    new FieldOption('Other', ''),
  ];
  insuranceOptions: FieldOption<string>[] = [
    new FieldOption('Excessive insurance', ''),
    new FieldOption(
      'Excessive or unusual cash borrowing against policy/annuity',
      ''
    ),
    new FieldOption(
      'Proceeds sent to or received from unrelated third party',
      ''
    ),
    new FieldOption(
      "Suspicious life settlement sales insurance (e.g., STOLI's, Viaticals)",
      ''
    ),
    new FieldOption('Suspicious termination of policy or contract', ''),
    new FieldOption('Unclear or no insurable interest', ''),
    new FieldOption('Other', ''),
  ];
  securitiesOptions: FieldOption<string>[] = [
    new FieldOption('Insider trading', ''),
    new FieldOption('Market manipulation', ''),
    new FieldOption('Misappropriation', ''),
    new FieldOption('Unauthorized pooling', ''),
    new FieldOption('Wash trading', ''),
    new FieldOption('Other', ''),
  ];
  mortgageFraudOptions: FieldOption<string>[] = [
    new FieldOption('Application fraud', ''),
    new FieldOption('Appraisal fraud', ''),
    new FieldOption('Foreclosure/Short sale fraud', ''),
    new FieldOption('Load Modification fraud', ''),
    new FieldOption('Originiation fraud', ''),
    new FieldOption('Other', ''),
  ];
  cyberEventOptions: FieldOption<string>[] = [
    new FieldOption('Against Financial Institution(s)', ''),
    new FieldOption('Against Financial institution Customer(s)', ''),
    new FieldOption('Other', ''),
  ];
  productTypeOptions: FieldOption<string>[] = [
    new FieldOption('Bonds/Notes', ''),
    new FieldOption('Commercial mortgage', ''),
    new FieldOption('Commercial paper', ''),
    new FieldOption('Credit card', ''),
    new FieldOption('Debit card', ''),
    new FieldOption('Deposit account', ''),
    new FieldOption('Forex transactions', ''),
    new FieldOption('Futures/Options on futures', ''),
    new FieldOption('Hedge fund', ''),
    new FieldOption('Home equity line of credit', ''),
    new FieldOption('Home equity loan', ''),
    new FieldOption('Insurance/Annuity products', ''),
    new FieldOption('Microcap securities', ''),
    new FieldOption('Mutual fund', ''),
    new FieldOption('Options on securities', ''),
    new FieldOption('Prepaid access', ''),
    new FieldOption('Residential mortgage', ''),
    new FieldOption('Security futures products', ''),
    new FieldOption('Stocks', ''),
    new FieldOption('Swap, hybrid or other derivatives', ''),
    new FieldOption('Other', ''),
  ];
  instrucmentTypesOptions: FieldOption<string>[] = [
    new FieldOption("Bank/Cashier's check", ''),
    new FieldOption('Foreign currency', ''),
    new FieldOption('Funds transfer', ''),
    new FieldOption('Gaming instruments', ''),
    new FieldOption('Government payment', ''),
    new FieldOption('Money orders', ''),
    new FieldOption('Personal/Business check', ''),
    new FieldOption('Travelers checks', ''),
    new FieldOption('U.S. Currency', ''),
    new FieldOption('Other', ''),
  ];

  otherInputWidth: string = '400px';

  constructor(
    private fb: FormBuilder,
    private scrollSpyService: ScrollSpyService
  ) {}

  ngOnInit(): void {
    this.faStructuring = this.fb.array([]);
    this.populateControls(
      this.structuringOptions,
      this.faStructuring,
      this.fcStructuringOther
    );

    this.faTerroristFinancing = this.fb.array([]);
    this.populateControls(
      this.terroristFinancingOptions,
      this.faTerroristFinancing,
      this.fcTerroristFinancingOther
    );

    this.faFraud = this.fb.array([]);
    this.populateControls(this.fraudOptions, this.faFraud, this.fcFraudOther);

    this.faGamingActivities = this.fb.array([]);
    this.populateControls(
      this.gamingActivitiesOptions,
      this.faGamingActivities,
      this.fcGamingActivitiesOther
    );

    this.faMoneyLaundering = this.fb.array([]);
    this.populateControls(
      this.moneyLaunderingOptions,
      this.faMoneyLaundering,
      this.fcMoneyLaunderingOther
    );

    this.faIdentification = this.fb.array([]);
    this.populateControls(
      this.identificationOptions,
      this.faIdentification,
      this.fcIdentificationOther
    );

    this.faOtherActivities = this.fb.array([]);
    this.populateControls(
      this.otherSuspiciousActivityOptions,
      this.faOtherActivities,
      this.fcOtherActivitiesOther
    );

    this.faInsurance = this.fb.array([]);
    this.populateControls(
      this.insuranceOptions,
      this.faInsurance,
      this.fcInsuranceOther
    );

    this.faSecurities = this.fb.array([]);
    this.populateControls(
      this.securitiesOptions,
      this.faSecurities,
      this.fcSecuritiesOther
    );

    this.faMortgageFraud = this.fb.array([]);
    this.populateControls(
      this.mortgageFraudOptions,
      this.faMortgageFraud,
      this.fcMortgageFraudOther
    );

    this.faCyberEvent = this.fb.array([]);
    this.populateControls(
      this.cyberEventOptions,
      this.faCyberEvent,
      this.fcCyberEventOther
    );

    this.faProductTypes = this.fb.array([]);
    this.populateControls(
      this.productTypeOptions,
      this.faProductTypes,
      this.fcProductTypesOther
    );

    this.faInstrumentTypes = this.fb.array([]);
    this.populateControls(
      this.instrucmentTypesOptions,
      this.faInstrumentTypes,
      this.fcInstrumentTypesOther
    );

    this.fgActivity = this.fb.group({
      fcDollarAmount: this.fcDollarAmount,
      fcAmountInvolved: this.fcAmountInvolved,
      fcDateOption: this.fcDateOption,
      fcDateOfActivity: this.fcDateOfActivity,
      faStructuring: this.faStructuring,
      fcStructuringOther: this.fcStructuringOther,
      faTerroristFinancing: this.faTerroristFinancing,
      fcTerroristFinancingOther: this.fcTerroristFinancingOther,
      faFraud: this.faFraud,
      fcFraudOther: this.fcFraudOther,
      faGamingActivities: this.faGamingActivities,
      fcGamingActivities: this.fcGamingActivitiesOther,
      faMoneyLaundering: this.faMoneyLaundering,
      fcMoneyLaunderingOther: this.fcMoneyLaunderingOther,
      faIdentification: this.faIdentification,
      fcIdentificationOther: this.fcIdentificationOther,
      faOtherActivities: this.faOtherActivities,
      fcOtherActivitiesOther: this.fcOtherActivitiesOther,
      faInsurance: this.faInsurance,
      fcInsuranceOther: this.fcInsuranceOther,
      faSecurities: this.faSecurities,
      fcSecuritiesOther: this.fcSecuritiesOther,
      faMortgageFraud: this.faMortgageFraud,
      fcMortgageFraudOther: this.fcMortgageFraudOther,
      faCyberEvent: this.faCyberEvent,
      fcCyberEventOther: this.fcCyberEventOther,
      faProductTypes: this.faProductTypes,
      fcProductTypesOther: this.fcProductTypesOther,
      faInstrumentTypes: this.faInstrumentTypes,
      fcInstrumentTypesOther: this.fcInstrumentTypesOther,
      fcCommodityType: this.fcCommodityType,
      fcProductInstrumentDescription: this.fcProductInstrumentDescription,
      fcMarketWhereTraded: this.fcMarketWhereTraded,
      fcCusipNumber: this.fcCusipNumber,
    });
  }

  isInView($event): void {
    alert('scrolled');
  }

  private populateControls(
    options: FieldOption<string>[],
    formArray: FormArray,
    otherFormControl: FormControl
  ): void {
    options.forEach((o) => formArray.controls.push(new FormControl()));

    formArray.controls[options.length - 1].valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: boolean) => {
        if (value) {
          otherFormControl.enable();
        } else {
          otherFormControl.disable();
        }
      });
  }
}
