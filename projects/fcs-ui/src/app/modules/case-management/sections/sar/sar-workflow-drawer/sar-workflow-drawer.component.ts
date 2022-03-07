import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-sar-workflow-drawer',
  templateUrl: './sar-workflow-drawer.component.html',
  styleUrls: ['./sar-workflow-drawer.component.scss'],
})
export class SarWorkflowDrawerComponent implements OnInit {
  @Input()
  visible: boolean;

  @Input()
  disabled: boolean;

  fgWorkflow: FormGroup;
  fcWorkflow: FormControl = new FormControl(Validators.required);
  fcDisposition: FormControl = new FormControl();
  fcNarrative: FormControl = new FormControl();

  workflowOptions: FieldOption<string>[] = [
    new FieldOption('SAR', '1'),
    new FieldOption('No-SAR', '2'),
    new FieldOption('Close', '3'),
  ];

  sarOptions: FieldOption<string>[] = [
    new FieldOption('Initial SAR', '1'),
    new FieldOption('File Continuing Activity', '2'),
  ];
  noSarOptions: FieldOption<string>[] = [
    new FieldOption('Not Suspicious - Normal Activity', '3'),
    new FieldOption('One-Time Occurrence', '4'),
    new FieldOption('EDD - Noraml and Expected', '5'),
  ];

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'insertImage',
        'insertVideo',
        'backgroundColor',
        'undo',
        'redo',
        'toggleEditorMode',
      ],
      ['fontSize'],
    ],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgWorkflow = this.fb.group({
      fcWorkflow: this.fcWorkflow,
      fcDisposition: this.fcDisposition,
      fcNarrative: this.fcNarrative,
    });

    if (this.disabled) {
      this.fgWorkflow.disable();
    }

    this.fcWorkflow.setValue('1');
    this.fcDisposition.setValue('1');
  }

  hideDrawer(): void {
    this.visible = false;
  }
}
