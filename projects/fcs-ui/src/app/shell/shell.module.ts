import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@fcs/shared';
import { ShellMainNavigationComponent } from './main-navigation/shell-main-navigation.component';
import { I18nModule } from '../i18n';
import { DefaultNavigationComponent } from './main-navigation/default-navigation/default-navigation.component';
import { CaseManagementNavigationComponent } from './main-navigation/case-management-navigation/case-management-navigation.component';
import { LoggedInUserComponent } from './logged-in-user/logged-in-user.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ClientsModule } from '../modules/clients/clients.module';
import { ClientManagementNavigationComponent } from './main-navigation/client-management-navigation/client-management-navigation.component';
import { ScenarioEngineNavigationComponent } from './main-navigation/scenario-engine-navigation/scenario-engine-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    I18nModule,
    RouterModule,
    SharedModule,
    ClientsModule,
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    DefaultNavigationComponent,
    ShellMainNavigationComponent,
    CaseManagementNavigationComponent,
    LoggedInUserComponent,
    ActionBarComponent,
    ClientManagementNavigationComponent,
    ScenarioEngineNavigationComponent,
  ],
})
export class ShellModule {}
