import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { INavigationItem } from '../models';

@Component({
  selector: 'yh-main-navigation-item',
  templateUrl: './main-navigation-item.component.html',
  styleUrls: ['./main-navigation-item.component.scss'],
})
export class MainNavigationItemComponent implements OnInit {
  @Input()
  item: INavigationItem;

  @Input()
  expanded: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
