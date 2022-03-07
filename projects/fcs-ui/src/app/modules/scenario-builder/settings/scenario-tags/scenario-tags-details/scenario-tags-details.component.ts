import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IScenarioTag } from '../scenario-tags.component';

@Component({
  selector: 'yh-scenario-tags-details',
  templateUrl: './scenario-tags-details.component.html',
  styleUrls: ['./scenario-tags-details.component.scss'],
})
export class ScenarioTagsDetailsComponent implements OnInit {
  @Input()
  tag: IScenarioTag;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
