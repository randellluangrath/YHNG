import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimeNgLibraryModule } from '../shared-primeng.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedTypographyModule } from '../components/typography/typography.module';
import { TextFieldComponent } from './text-field/text-field.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { PhoneFieldComponent } from './phone-field/phone-field.component';
import { ButtonComponent } from './button/button.component';
import { TextareaFieldComponent } from './textarea-field/textarea-field.component';
import { UploadFieldComponent } from './upload-field/upload-field.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { MultiSelectFieldComponent } from './multiselect-field/multiselect-field.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RequiredMarkerComponent } from './required-marker/required-marker.component';
import { FormFieldLabelComponent } from './form-field/form-field-label/form-field-label.component';
import { FormFieldComponent } from './form-field/form-field/form-field.component';
import { FormFieldErrorComponent } from './form-field/form-field-error/form-field-error.component';
import { FormFieldWarningComponent } from './form-field/form-field-warning/form-field-warning.component';
import { SharedPresentationalModule } from '../components/presentation/shared-presentational.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumberFieldComponent } from './number-field/number-field.component';
import { RangeFieldComponent } from './range-field/range-field.component';
import { RadioGroupFieldComponent } from './radio-group-field/radio-group-field.component';
import { AutocompleteFieldComponent } from './autocomplete-field/autocomplete-field.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { ButtonFieldComponent } from './button-field/button-field.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CurrencyFieldComponent } from './currency-field/currency-field.component';
import { FormFieldDescriptionComponent } from './form-field/form-field-description/form-field-description.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { EditorFieldComponent } from './editor-field/editor-field.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ListboxFieldComponent } from './listbox-field/listbox-field.component';
import { ChipsFieldComponent } from './chips-field/chips-field.component';

@NgModule({
  declarations: [
    DropdownComponent,
    TextFieldComponent,
    SplitButtonComponent,
    PhoneFieldComponent,
    ButtonComponent,
    TextareaFieldComponent,
    UploadFieldComponent,
    CheckboxComponent,
    DateFieldComponent,
    MultiSelectFieldComponent,
    RequiredMarkerComponent,
    FormFieldComponent,
    FormFieldLabelComponent,
    FormFieldErrorComponent,
    FormFieldWarningComponent,
    NumberFieldComponent,
    RangeFieldComponent,
    RadioGroupFieldComponent,
    AutocompleteFieldComponent,
    SelectButtonComponent,
    ButtonFieldComponent,
    CheckboxGroupComponent,
    CurrencyFieldComponent,
    FormFieldDescriptionComponent,
    ToggleButtonComponent,
    EditorFieldComponent,
    ListboxFieldComponent,
    ChipsFieldComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedTypographyModule,
    SharedPrimeNgLibraryModule,
    SharedPresentationalModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AngularEditorModule,
  ],
  exports: [
    ReactiveFormsModule,
    DropdownComponent,
    TextFieldComponent,
    SplitButtonComponent,
    PhoneFieldComponent,
    ButtonComponent,
    TextareaFieldComponent,
    UploadFieldComponent,
    CheckboxComponent,
    DateFieldComponent,
    MultiSelectFieldComponent,
    FormFieldErrorComponent,
    FormFieldWarningComponent,
    NumberFieldComponent,
    RangeFieldComponent,
    RadioGroupFieldComponent,
    SelectButtonComponent,
    AutocompleteFieldComponent,
    ButtonFieldComponent,
    CheckboxGroupComponent,
    CurrencyFieldComponent,
    FormFieldDescriptionComponent,
    ToggleButtonComponent,
    EditorFieldComponent,
    ListboxFieldComponent,
    ChipsFieldComponent,
  ],
  providers: [],
})
export class SharedFormsModule {}
