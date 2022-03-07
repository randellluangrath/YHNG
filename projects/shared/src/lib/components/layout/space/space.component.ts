import { Component, ContentChildren, HostBinding, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SpaceItemComponent } from './space-item/space-item.component';

@Component({
  selector: 'yh-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss'],
})
export class SpaceComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-space';

  @ContentChildren(SpaceItemComponent)
  items: QueryList<SpaceItemComponent[]>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.items.length);
  }
}
