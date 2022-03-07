import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'yh-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.scss'],
})
export class SpaceItemComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-space-item';
  constructor() {}

  ngOnInit(): void {}
}
