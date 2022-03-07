import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'yh-general-layout-content',
  templateUrl: './general-layout-content.component.html',
  styleUrls: ['./general-layout-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GeneralLayoutContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
