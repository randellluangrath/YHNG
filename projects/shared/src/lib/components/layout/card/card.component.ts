import {
  Component,
  ContentChild,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CardContentTemplateComponent } from './card-content-template/card-content-template.component';
import { CardFooterTemplateComponent } from './card-footer-template/card-footer-template.component';
import { CardHeaderTemplateComponent } from './card-header-template/card-header-template.component';
import {
  faCaretDown,
  faCaretRight,
  faChevronDown,
  faChevronRight,
  faMinus,
  faPlus,
} from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[class.selectable]': 'selectable',
    '[class.is-selected]': 'selected',
    '[class.is-flat]': 'flat',
  },
})
export class CardComponent implements OnInit {
  @ContentChild(CardContentTemplateComponent)
  cntentTemplate: CardContentTemplateComponent;

  @ContentChild(CardHeaderTemplateComponent)
  headerTemplate: CardHeaderTemplateComponent;

  @ContentChild(CardFooterTemplateComponent)
  footerTemplate: CardFooterTemplateComponent;

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  icon: IconDefinition;

  @Input()
  expandBody: boolean;

  @Input()
  selectable: boolean;

  @Input()
  selected: boolean;

  @Input()
  pad: boolean = true;

  @Input()
  flat: boolean;

  @Input()
  padSize: string = 'large';

  @Input()
  expandable: boolean;

  @Input()
  expanded: boolean = true;

  expandedIcon: IconDefinition = faChevronRight;
  collapseIcon: IconDefinition = faChevronDown;

  isExpanded: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.isExpanded = this.expanded;
  }
}
