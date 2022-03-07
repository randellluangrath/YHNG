import { Component, OnInit } from '@angular/core';
import { faInfoCircle, IconDefinition } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss'],
})
export class ResolutionComponent implements OnInit {
  infoIcon: IconDefinition = faInfoCircle;

  constructor() {}

  ngOnInit(): void {}
}
