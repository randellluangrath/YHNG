import {
  AfterViewInit,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { ActionsComponent } from '../actions/actions.component';
import { GeneralLayoutHeaderTemplateComponent } from './general-layout-header-template/general-layout-header-template.component';

@Component({
  selector: 'yh-general-layout-header',
  templateUrl: './general-layout-header.component.html',
  styleUrls: ['./general-layout-header.component.scss'],
  host: {
    '[class.has-actions]': 'actions!=null',
  },
})
export class GeneralLayoutHeaderComponent implements OnInit, AfterViewInit {
  @HostBinding('class')
  class: string = 'yh-general-layout-header';

  @ContentChild(ActionsComponent)
  actions: ActionsComponent;

  @ContentChild(GeneralLayoutHeaderTemplateComponent)
  template: GeneralLayoutHeaderTemplateComponent;

  @Input()
  title: string;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
