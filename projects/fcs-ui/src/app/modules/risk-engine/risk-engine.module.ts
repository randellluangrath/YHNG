import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskEngineListComponent } from './risk-engine-list/risk-engine-list.component';
import { RiskEngineEditComponent } from './risk-engine-edit/risk-engine-edit.component';
import { SharedModule } from '@fcs/app/@shared';
import { RiskEngineRoutingModule } from './risk-engine-routing.module';
import { RiskEngineTextScoringFormComponent } from './risk-engine-edit/scoring-forms/risk-engine-text-scoring-form/risk-engine-text-scoring-form.component';
import { FormsModule } from '@angular/forms';
import { RiskEngineDropdownScoringFormComponent } from './risk-engine-edit/scoring-forms/risk-engine-dropdown-scoring-form/risk-engine-dropdown-scoring-form.component';
import { RiskEngineEditFormComponent } from './risk-engine-edit/risk-engine-edit-form/risk-engine-edit-form.component';
import { RiskEngingNaicsScoringFormComponent } from './risk-engine-edit/scoring-forms/risk-enging-naics-scoring-form/risk-enging-naics-scoring-form.component';
import { NaicsLookupComponent } from './risk-engine-edit/scoring-forms/risk-enging-naics-scoring-form/naics-lookup/naics-lookup.component';
import { RiskEngineSchedulingFormComponent } from './risk-engine-edit/risk-engine-scheduling-form/risk-engine-scheduling-form.component';
import { SchedulingCustomDailyComponent } from './risk-engine-edit/risk-engine-scheduling-form/scheduling-custom-daily/scheduling-custom-daily.component';
import { SchedulingCustomWeeklyComponent } from './risk-engine-edit/risk-engine-scheduling-form/scheduling-custom-weekly/scheduling-custom-weekly.component';
import { SchedulingCustomMonthlyComponent } from './risk-engine-edit/risk-engine-scheduling-form/scheduling-custom-monthly/scheduling-custom-monthly.component';
import { SchedulingCustomYearlyComponent } from './risk-engine-edit/risk-engine-scheduling-form/scheduling-custom-yearly/scheduling-custom-yearly.component';

@NgModule({
  declarations: [
    RiskEngineListComponent,
    RiskEngineEditComponent,
    RiskEngineEditFormComponent,
    RiskEngineTextScoringFormComponent,
    RiskEngineDropdownScoringFormComponent,
    RiskEngingNaicsScoringFormComponent,
    NaicsLookupComponent,
    RiskEngineSchedulingFormComponent,
    SchedulingCustomDailyComponent,
    SchedulingCustomWeeklyComponent,
    SchedulingCustomMonthlyComponent,
    SchedulingCustomYearlyComponent,
  ],
  imports: [CommonModule, SharedModule, RiskEngineRoutingModule, FormsModule],
})
export class RiskEngineModule {}
