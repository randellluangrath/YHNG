import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface INavigationGroup {
  name: string;
  items: INavigationItem[];
}

export interface INavigationItem {
  location: string;
  icon?: IconDefinition;
  title: string;
  children?: INavigationItem[];
}
