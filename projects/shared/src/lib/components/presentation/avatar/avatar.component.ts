import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  @Input()
  url: string;

  @Input()
  label: string = 'U';

  @Input()
  size: 'xsmall' | 'small' | 'large' | 'xlarge' = 'large';

  constructor() {}

  ngOnInit(): void {}
}
