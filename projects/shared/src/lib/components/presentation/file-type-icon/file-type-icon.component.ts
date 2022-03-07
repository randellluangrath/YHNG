import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFile,
  faFileAudio,
  faFileExcel,
  faFileImage,
  faFilePdf,
  faFileVideo,
  faFileWord,
} from '@fortawesome/free-regular-svg-icons';

export enum FileTypeIconType {
  Image = 'image',
  Audio = 'audio',
  PDF = 'pdf',
  Text = 'text',
  Word = 'word',
  Excel = 'excel',
  Video = 'video',
}

@Component({
  selector: 'yh-file-type-icon',
  templateUrl: './file-type-icon.component.html',
  styleUrls: ['./file-type-icon.component.scss'],
  host: {
    '[class.is-image]': 'type === FileTypeIconType.Image',
    '[class.is-video]': 'type === FileTypeIconType.Video',
    '[class.is-text]': 'type === FileTypeIconType.Text',
    '[class.is-pdf]': 'type === FileTypeIconType.PDF',
    '[class.is-audio]': 'type === FileTypeIconType.Audio',
    '[class.is-word]': 'type === FileTypeIconType.Word',
    '[class.is-excel]': 'type === FileTypeIconType.Excel',
    '[class.is-small]': 'small',
    '[class.is-bordered]': 'bordered',
    '[class.is-filled]': 'filled',
  },
})
export class FileTypeIconComponent implements OnInit {
  @Input()
  type: FileTypeIconType;

  @Input()
  small: boolean;

  @Input()
  bordered: boolean = true;

  @Input()
  filled: boolean = true;

  icon: IconDefinition = faFile;

  FileTypeIconType = FileTypeIconType;

  constructor() {}

  ngOnInit(): void {
    switch (this.type) {
      case FileTypeIconType.Audio: {
        this.icon = faFileAudio;
        break;
      }
      case FileTypeIconType.Excel: {
        this.icon = faFileExcel;
        break;
      }
      case FileTypeIconType.Image: {
        this.icon = faFileImage;
        break;
      }
      case FileTypeIconType.PDF: {
        this.icon = faFilePdf;
        break;
      }
      case FileTypeIconType.Text: {
        this.icon = faFile;
        break;
      }
      case FileTypeIconType.Word: {
        this.icon = faFileWord;
        break;
      }
      case FileTypeIconType.Video: {
        this.icon = faFileVideo;
        break;
      }
    }
  }
}
