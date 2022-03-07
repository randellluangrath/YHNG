import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-editor-field',
  templateUrl: './editor-field.component.html',
  styleUrls: ['./editor-field.component.css'],
})
export class EditorFieldComponent extends BaseFieldComponent implements OnInit {
  @Input()
  enableCharacterCounter: boolean = true;

  @Input()
  max: number = 250;

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

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
