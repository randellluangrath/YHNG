import { Component, Input, OnInit } from '@angular/core';
import {
  faClipboardList,
  IconDefinition,
} from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-previous-answer-item',
  templateUrl: './previous-answer-item.component.html',
  styleUrls: ['./previous-answer-item.component.scss'],
})
export class PreviousAnswerItemComponent implements OnInit {
  @Input()
  answer: string;

  icon: IconDefinition = faClipboardList;

  constructor() {}

  ngOnInit(): void {}
}
