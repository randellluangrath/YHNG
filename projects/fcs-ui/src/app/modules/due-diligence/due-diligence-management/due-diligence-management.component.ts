import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as faker from 'faker';
import { UUID } from 'angular2-uuid';
import { ITreeOptions, TreeComponent } from '@circlon/angular-tree-component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBallotCheck,
  faCheck,
  faCheckCircle,
  faCircle,
  faInfo,
  faInfoCircle,
  faQuestionCircle,
} from '@fortawesome/pro-light-svg-icons';
@Component({
  selector: 'yh-due-diligence-management',
  templateUrl: './due-diligence-management.component.html',
  styleUrls: ['./due-diligence-management.component.scss'],
})
export class DueDiligenceManagementComponent implements OnInit {
  @ViewChild('tree')
  private tree: TreeComponent;

  infoIcon: IconDefinition = faInfoCircle;
  questionIcon: IconDefinition = faQuestionCircle;
  answerIcon: IconDefinition = faBallotCheck;

  items: MenuItem[];

  activeItem: MenuItem;

  showDrawer: boolean = true;

  questions: IDueDiligenceQuestion[];
  selectedQuestions: IDueDiligenceQuestion[];

  nodes = [
    {
      id: 1,
      isQuestion: true,
      name: 'Will this account be used for business purposes?',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' },
      ],
    },
    {
      id: 4,
      name: 'Business Ownership Type',
      isQuestion: true,
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }],
        },
      ],
    },
    {
      id: 7,
      isQuestion: true,
      name: 'Individual or Organization client?',
      children: [
        {
          id: 8,
          name: 'Individual',
          children: [
            {
              id: 10,
              isQuestion: true,
              name: 'Is the customer a senior foreign political figure?',
              children: [
                {
                  id: 101,
                  name: 'No',
                  children: [
                    {
                      id: 1011,
                      isQuestion: true,
                      name: 'Is the customer a close associate or family member of a senior foreign political figure?',
                      children: [
                        {
                          id: 10111,
                          name: 'No',
                        },
                        {
                          id: 10112,
                          name: 'Yes',
                          children: [
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
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 102,
                  name: 'Yes',
                },
              ],
            },
            {
              id: 111,
              isQuestion: true,
              name: 'Employment Status',
              isCustom: true,
            },
          ],
        },
        {
          id: 9,
          name: 'Organization',
          children: [{ id: 10, name: 'subsub' }],
        },
      ],
    },
    {
      id: 11,
      isQuestion: true,
      name: 'Business Ownership Type',
      children: [
        { id: 12, name: 'child2.1' },
        {
          id: 13,
          name: 'child2.2',
          children: [{ id: 14, name: 'subsub' }],
        },
      ],
    },
  ];
  options: ITreeOptions = {
    allowDrag: (node) => true,
    allowDrop: (element, { parent, index }) => {
      return true;
      // return true / false based on element, to.parent, to.index. e.g.
      return parent.hasChildren;
    },
    getNodeClone: (node) => ({
      ...node.data,
      id: UUID.UUID(),
      name: `copy of ${node.data.name}`,
    }),
    scrollContainer: document.getElementById('questionTree'),
  };
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'ADD', icon: 'pi pi-sitemap' },
      { label: 'CDD', icon: 'pi pi-sitemap' },
      { label: 'EDD', icon: 'pi pi-sitemap' },
    ];

    this.activeItem = this.items[0];

    this.selectedQuestions = [];
  }
  onEvent(e): void {
    this.tree.sizeChanged();
  }

  showAddQuestionForm(): void {
    this.showDrawer = true;
  }
  handleOnHide(): void {
    this.showDrawer = false;
  }
  handleQuestionSelected(question: IDueDiligenceQuestion): void {
    this.selectedQuestions.push(question);
  }
}

export interface IDueDiligenceQuestion {
  id: number;
  question: string;
  isSelected: boolean;
  isCustom?: boolean;
}
