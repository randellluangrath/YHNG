import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAccountSetsListComponent } from './client-account-sets-list/client-account-sets-list.component';
import { SharedModule } from '@fcs/app/@shared';
import { ClientAccountSetsRoutingModule } from './client-account-sets-routing.module';
import { ClientAccountSetsEditComponent } from './client-account-sets-edit/client-account-sets-edit.component';
import { ClientAccountSetsCriteriaItemComponent } from './client-account-sets-edit/client-account-sets-criteria-item/client-account-sets-criteria-item.component';
import { CreateCriteriaDialogComponent } from './client-account-sets-edit/create-criteria-dialog/create-criteria-dialog.component';
import { AccountIdCriteriaComponent } from './criteria/account-id-criteria/account-id-criteria.component';
import { ClientAccountMatchesComponent } from './client-account-matches/client-account-matches.component';
import { TypeCriteriaComponent } from './criteria/type-criteria/type-criteria.component';
import { ClientAccountMatchesListComponent } from './client-account-matches-list/client-account-matches-list.component';
import { ClassCodeComponent } from './criteria/class-code/class-code.component';
import { NacisCodeComponent } from './criteria/nacis-code/nacis-code.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientAccountSetsListComponent,
    ClientAccountSetsEditComponent,
    ClientAccountSetsCriteriaItemComponent,
    CreateCriteriaDialogComponent,
    AccountIdCriteriaComponent,
    ClientAccountMatchesComponent,
    TypeCriteriaComponent,
    ClientAccountMatchesListComponent,
    ClassCodeComponent,
    NacisCodeComponent,
  ],
  imports: [
    CommonModule,
    ClientAccountSetsRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class ClientAccountSetsModule {}
