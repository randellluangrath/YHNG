import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SarWizardService {
  events$: BehaviorSubject<ISarViewChangeEvent> =
    new BehaviorSubject<ISarViewChangeEvent>({ view: SarWizardView.Overview });
  eventsObs$: Observable<ISarViewChangeEvent> = this.events$.asObservable();

  events(): Observable<ISarViewChangeEvent> {
    return this.eventsObs$;
  }

  showOverview(): void {
    this.events$.next({
      view: SarWizardView.Overview,
    });
  }

  showFinancialInstitution(id: string) {
    this.events$.next({
      view: SarWizardView.FinancialActivity,
      financialInstitutionId: id,
    });
  }

  showSubjects(): void {
    this.events$.next({
      view: SarWizardView.Subjects,
    });
  }

  showFilingInstitution(): void {
    this.events$.next({
      view: SarWizardView.Contact,
    });
  }

  showSuspiciousActivity(subsection: SarSuspiciousActivitySection): void {
    this.events$.next({
      view: SarWizardView.SuspiciousActivity,
    });
  }
}

export interface ISarViewChangeEvent {
  view: SarWizardView;
  financialInstitutionId?: string;
}

export enum SarWizardView {
  Overview,
  Contact,
  FinancialActivity,
  Subjects,
  SuspiciousActivity,
  Narrative,
}

export enum SarSuspiciousActivitySection {
  General,
  Structuring,
  TerroristFinancing,
  Fraud,
  GamingActivities,
  Identification,
  OtherActivities,
  Insurance,
  Securities,
  MortgageFraud,
  CyberEvent,
  ProductTypes,
  InstrumentTypes,
  IpAddresses,
  CyberEvents,
}
