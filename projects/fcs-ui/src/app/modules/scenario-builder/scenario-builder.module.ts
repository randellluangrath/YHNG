import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';
import { ScenarioBuilderRoutingModule } from './scenario-builder-routing.module';
import { SharedModule } from '@fcs/app/@shared';
import { FormsModule } from '@angular/forms';
import { ScenarioAchCreditsComponent } from './sections/scenario-ach-credits/scenario-ach-credits.component';
import { ScenarioAchDebitsComponent } from './sections/scenario-ach-debits/scenario-ach-debits.component';
import { ScenarioAchOriginationsComponent } from './sections/scenario-ach-originations/scenario-ach-originations.component';
import { ScenarioAtmDepositsDdaComponent } from './sections/scenario-atm-deposits-dda/scenario-atm-deposits-dda.component';
import { ScenarioDepositsDdaComponent } from './sections/scenario-deposits-dda/scenario-deposits-dda.component';
import { ScenarioEftComponent } from './sections/scenario-eft/scenario-eft.component';
import { ScenarioFasterPaymentsComponent } from './sections/scenario-faster-payments/scenario-faster-payments.component';
import { ScenarioMoneyLaunderingComponent } from './sections/scenario-money-laundering/scenario-money-laundering.component';
import { ScenarioOnUsChecksDdaComponent } from './sections/scenario-on-us-checks-dda/scenario-on-us-checks-dda.component';
import { ScenarioPointOfSaleDebitsDdaComponent } from './sections/scenario-point-of-sale-debits-dda/scenario-point-of-sale-debits-dda.component';
import { ScenarioTellerInterfaceComponent } from './sections/scenario-teller-interface/scenario-teller-interface.component';
import { ScenarioWireOriginationsComponent } from './sections/scenario-wire-originations/scenario-wire-originations.component';
import { EditRuleComponent } from './sections/edit-rule/edit-rule.component';
import { ScenarioEditComponent } from './scenario-edit/scenario-edit.component';
import { ScenarioTagsComponent } from './settings/scenario-tags/scenario-tags.component';
import { ScenarioTagsEditComponent } from './settings/scenario-tags/scenario-tags-edit/scenario-tags-edit.component';
import { ScenarioTagsDetailsComponent } from './settings/scenario-tags/scenario-tags-details/scenario-tags-details.component';

@NgModule({
  declarations: [ScenarioListComponent, ScenarioAchCreditsComponent, ScenarioAchDebitsComponent, ScenarioAchOriginationsComponent, ScenarioAtmDepositsDdaComponent, ScenarioDepositsDdaComponent, ScenarioEftComponent, ScenarioFasterPaymentsComponent, ScenarioMoneyLaunderingComponent, ScenarioOnUsChecksDdaComponent, ScenarioPointOfSaleDebitsDdaComponent, ScenarioTellerInterfaceComponent, ScenarioWireOriginationsComponent, EditRuleComponent, ScenarioEditComponent, ScenarioTagsComponent, ScenarioTagsEditComponent, ScenarioTagsDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScenarioBuilderRoutingModule,
    FormsModule,
  ],
})
export class ScenarioBuilderModule {}
