import { Component, Injectable, Output } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  'es': {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do' ],
    months: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    fullmonths: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  }
};

@Injectable()
export class I18n {
  language = 'es';
}

@Injectable()
export class CustomDatePickerEs extends NgbDatepickerI18n  {
  
  constructor( private i18n: I18n ){ super(); }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this.i18n.language].weekdays[weekday-1];
  }
  getMonthShortName(month: number, year?: number): string {
    return I18N_VALUES[this.i18n.language].months[month-1];
  }
  getMonthFullName(month: number, year?: number): string {
    return I18N_VALUES[this.i18n.language].fullmonths[month-1];
  }
  getDayAriaLabel(date: import("@ng-bootstrap/ng-bootstrap").NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
  
}

@Component({
  selector: 'ngb-datepicker-es',
  templateUrl: './datepicker.html',
  providers: [I18n,{provide: NgbDatepickerI18n, useClass: CustomDatePickerEs}],
  styleUrls: ['./datepicker.scss']
})
export class DatepickerComponent {
  @Output() model: NgbDateStruct;
}

