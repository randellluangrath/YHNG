import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';
import { AuthenticationService, CredentialsService } from '@fcs/app/auth';
import { MockAuthenticationService } from '@fcs/app/auth/authentication.service.mock';
import { MockCredentialsService } from '@fcs/app/auth/credentials.service.mock';

import { I18nModule } from '@fcs/app/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          TranslateModule.forRoot(),
          I18nModule,
          NgbModule,
          CoreModule,
        ],
        providers: [
          {
            provide: AuthenticationService,
            useClass: MockAuthenticationService,
          },
          { provide: CredentialsService, useClass: MockCredentialsService },
        ],
        declarations: [HeaderComponent, ShellComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
