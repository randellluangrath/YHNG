/**
 * Usage: value | localDate:'format'
 * If no format is provided MM/dd/yyyy will be used.
 **/

import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '@fcs/app/i18n';

@Pipe({
  name: 'localDate',
})
export class LocalDatePipe implements PipeTransform {
  constructor(private i18nService: I18nService) {}

  transform(value: any, format?: string): any {
    if (!value) {
      return '';
    }
    if (!format) {
      format = 'MM/dd/yyyy';
    }
    if (format === 'full') {
      format = 'MM/dd/yyyy hh:mm:ss aa';
    }

    return formatDate(value, format, this.i18nService.language);
  }
}
