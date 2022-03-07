import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';

import { environment } from '@fcs/env';
import { CoreModule } from '@fcs/core';
import { SharedModule } from '@fcs/shared';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AlertsModule } from './modules/alerts/alerts.module';
import { CaseManagementModule } from './modules/case-management/case-management.module';
import { WatchlistModule } from './modules/watchlist/watchlist.module';
import { ClientAccountSetsModule } from './modules/client-account-sets/client-account-sets.module';
import { ClientsModule } from './modules/clients/clients.module';
import { DueDiligenceModule } from './modules/due-diligence/due-diligence.module';
import { RiskEngineModule } from './modules/risk-engine/risk-engine.module';
import { ScenarioBuilderModule } from './modules/scenario-builder/scenario-builder.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    DashboardModule,
    AlertsModule,
    CaseManagementModule,
    ClientAccountSetsModule,
    WatchlistModule,
    ClientsModule,
    DueDiligenceModule,
    RiskEngineModule,
    ScenarioBuilderModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
