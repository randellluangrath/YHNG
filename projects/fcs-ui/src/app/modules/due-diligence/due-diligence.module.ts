import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DueDiligenceManagementComponent } from './due-diligence-management/due-diligence-management.component';
import { DueDiligenceRoutingModule } from './due-diligence-routing.module';
import { SharedModule } from '@fcs/app/@shared';
import { DueDiligenceEditComponent } from './due-diligence-edit/due-diligence-edit.component';
import { ListCategoryEditComponent } from './category-forms/list-category-edit/list-category-edit.component';
import { NumberCategoryEditComponent } from './category-forms/number-category-edit/number-category-edit.component';
import { CountryCategoryEditComponent } from './category-forms/country-category-edit/country-category-edit.component';
import { StateCategoryEditComponent } from './category-forms/state-category-edit/state-category-edit.component';
import { NaicsCategoryEditComponent } from './category-forms/naics-category-edit/naics-category-edit.component';
import { SocCategoryEditComponent } from './category-forms/soc-category-edit/soc-category-edit.component';
import { DueDiligenceQuestionsComponent } from './due-diligence-questions/due-diligence-questions.component';
import { EddSchedulingManagementComponent } from './edd-scheduling-management/edd-scheduling-management.component';
import { RangeCategoryEditComponent } from './category-forms/range-category-edit/range-category-edit.component';

@NgModule({
  declarations: [
    DueDiligenceManagementComponent,
    DueDiligenceEditComponent,
    ListCategoryEditComponent,
    NumberCategoryEditComponent,
    CountryCategoryEditComponent,
    StateCategoryEditComponent,
    NaicsCategoryEditComponent,
    SocCategoryEditComponent,
    DueDiligenceQuestionsComponent,
    EddSchedulingManagementComponent,
    RangeCategoryEditComponent,
  ],
  imports: [DueDiligenceRoutingModule, CommonModule, SharedModule],
})
export class DueDiligenceModule {}
