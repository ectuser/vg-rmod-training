import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { InfoEffects } from './reducers/info/info.effects';
import { CountryEffects } from './reducers/country/country.effects';
import { CountryFacade } from './reducers/country/country.facade';
import { InfoFacade } from './reducers/info/info.facade';
import { reducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    SharedModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([InfoEffects, CountryEffects]),
  ],
  providers: [CountryFacade, InfoFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
