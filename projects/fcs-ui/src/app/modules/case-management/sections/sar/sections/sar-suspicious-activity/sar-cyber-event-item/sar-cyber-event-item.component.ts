import { Component, Input, OnInit } from '@angular/core';
import { ISarCyberEvent } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-cyber-event-item',
  templateUrl: './sar-cyber-event-item.component.html',
  styleUrls: ['./sar-cyber-event-item.component.scss'],
})
export class SarCyberEventItemComponent implements OnInit {
  @Input()
  event: ISarCyberEvent;

  constructor() {}

  ngOnInit(): void {}
}
