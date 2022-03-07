import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { ISubject } from '@fcs/app/domain/models/subject';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faLightbulb,
  faLightbulbOn,
  faMinus,
  faPlus,
  IconDefinition,
} from '@fortawesome/pro-light-svg-icons';
import * as faker from 'faker';
import * as _ from 'lodash';
import { AutoCompleteFieldOption } from 'projects/shared/src/lib/models/models';

@UntilDestroy()
@Component({
  selector: 'yh-subject-lookup',
  templateUrl: './subject-lookup.component.html',
  styleUrls: ['./subject-lookup.component.scss'],
})
export class SubjectLookupComponent implements OnInit {
  @Output()
  selected: EventEmitter<ISubjectLookup> = new EventEmitter<ISubjectLookup>();

  fgLookup: FormGroup;
  fcTerm: FormControl = new FormControl();
  faSubjects: FormArray;
  faSuggestedSubjects: FormArray;

  subjectOptions: AutoCompleteFieldOption[];

  subjects: ISubjectLookup[] = [];

  subjectSuggestions: ISubjectLookup[] = [];

  subjectsAdded: ISubjectLookup[] = [];

  hasSearched: boolean;

  infoIcon: IconDefinition = faInfoCircle;

  subject: ISubject;

  subjectList: ISubject[] = Array.from(new Array(15), () => {
    return this.mock.createSubject(1);
  });

  suggestedIcon = faLightbulb;
  suggestedIconOn = faLightbulbOn;

  showSuggested: boolean = true;

  isOccupationInformationExpanded: boolean = false;
  occupationInformationExpandedIcon: IconDefinition = faPlus;
  occupationInformationCollapseIcon: IconDefinition = faMinus;

  isAlternateNamesExpanded: boolean = false;
  alternateNamesExpandedIcon: IconDefinition = faPlus;
  alternateNamesCollapseIcon: IconDefinition = faMinus;

  isPhoneExpanded: boolean = false;
  phoneExpandedIcon: IconDefinition = faPlus;
  phoneCollapseIcon: IconDefinition = faMinus;

  isAddressesExpanded: boolean = false;
  addressesExpandedIcon: IconDefinition = faPlus;
  addressesCollapseIcon: IconDefinition = faMinus;

  isIdentificationExpanded: boolean = false;
  identificationExpandedIcon: IconDefinition = faPlus;
  identificationCollapseIcon: IconDefinition = faMinus;

  constructor(private fb: FormBuilder, private mock: MockDataService) {}

  ngOnInit(): void {
    // this.subject = this.mock.createSubject(1);

    this.subjects = _.orderBy(
      Array.from(new Array(25), () => this.generateSuggestionItem()),
      'name'
    );

    this.subjectOptions = this.subjects.map((suggestion) => {
      return new AutoCompleteFieldOption(
        suggestion.name,
        suggestion.name,
        suggestion.identifyingInformation
      );
    });

    this.faSuggestedSubjects = this.fb.array([]);
    this.faSubjects = this.fb.array([]);

    this.fgLookup = this.fb.group({
      fcTerm: this.fcTerm,
      faSuggestedSubjects: this.faSuggestedSubjects,
      faSubjects: this.faSubjects,
    });

    this.fcTerm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((term: string) => {
        this.hasSearched = true;
      });

    this.prepopulateSuggestedSubjects(this.subjectOptions[0]);
    this.prepopulateSuggestedSubjects(this.subjectOptions[1]);
    this.prepopulateSuggestedSubjects(this.subjectOptions[3]);
  }

  prepopulateSuggestedSubjects(option: AutoCompleteFieldOption): void {
    this.subjectSuggestions.push(
      this.subjects.find((a) => a.name === option.value)
    );
    this.faSuggestedSubjects.push(new FormControl(false));
  }

  handleSelection(option: AutoCompleteFieldOption): void {
    this.subjectsAdded.push(this.subjects.find((a) => a.name === option.value));
    this.fcTerm.reset();

    this.faSubjects.push(new FormControl(true));
  }
  private generateSuggestionItem(): ISubjectLookup {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      identifyingInformation: 'Test',
      suggested: false,
    };
  }
}

export interface ISubjectLookup {
  name: string;
  identifyingInformation: string;
  suggested: boolean;
}
