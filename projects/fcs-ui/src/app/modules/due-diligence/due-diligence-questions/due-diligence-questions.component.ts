import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ITreeOptions } from '@circlon/angular-tree-component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/pro-light-svg-icons';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'yh-due-diligence-questions',
  templateUrl: './due-diligence-questions.component.html',
  styleUrls: ['./due-diligence-questions.component.scss'],
})
export class DueDiligenceQuestionsComponent implements OnInit {
  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  questionIcon: IconDefinition = faQuestionCircle;
  editIcon: IconDefinition = faPencil;

  nodes = [
    {
      id: 1,
      isQuestion: true,
      name: 'Will this account be used for business purposes?',
    },
    {
      id: 4,
      name: 'Business Ownership Type',
      isQuestion: true,
    },
    {
      id: 101121,
      isQuestion: true,
      name: "What is the customer's relationship to the associated senior foreign political figure?",
    },
    {
      id: 101122,
      isQuestion: true,
      name: 'What is the name of the associated senior foreign political figure?',
    },
    {
      id: 7,
      isQuestion: true,
      name: 'Individual or Organization client?',
    },
    {
      id: 1011,
      isQuestion: true,
      name: 'Is the customer a close associate or family member of a senior foreign political figure?',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
    },
  ];
  options: ITreeOptions = {
    allowDrag: (node) => true,
    allowDrop: (element, { parent, index }) => {
      return false;
    },
    getNodeClone: (node) => ({
      ...node.data,
      id: UUID.UUID(),
      name: `copy of ${node.data.name}`,
    }),
  };

  fgFilter: FormGroup;
  fcFilter: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilter = this.fb.group({
      fcFilter: this.fcFilter,
    });
  }
  ngAfterViewInit(): void {
    // this.options.scrollContainer = document.getElementById(
    //   'availableQuestionsScrollContainer'
    // );
  }
  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }

  editQuestion(): void {}
}
