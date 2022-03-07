import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService, CredentialsService } from '@fcs/app/auth';
import { MockAuthenticationService } from '@fcs/app/auth/authentication.service.mock';
import { MockCredentialsService } from '@fcs/app/auth/credentials.service.mock';
import { I18nModule } from '@fcs/app/i18n';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          NgbModule,
          TranslateModule.forRoot(),
          I18nModule,
        ],
        declarations: [HeaderComponent],
        providers: [
          {
            provide: AuthenticationService,
            useClass: MockAuthenticationService,
          },
          { provide: CredentialsService, useClass: MockCredentialsService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
