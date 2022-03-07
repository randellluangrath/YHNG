import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'yh-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  @Input()
  icon: IconDefinition;

  @Input()
  value: number;

  constructor() {}

  ngOnInit(): void {}
}
