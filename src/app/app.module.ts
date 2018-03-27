import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppService} from './shared/service/app.service';
import {LoggerService} from './shared/service/logger.service';
import {CacheService} from './shared/service/cache.service';
import {ModulesModule} from './modules/modules.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RebirthPermissionModule} from 'rebirth-permission';
import {RebirthHttpModule} from 'rebirth-http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ModulesModule,
    RebirthHttpModule,
    RebirthPermissionModule.forRoot({ loginPage: '/login' }),
  ],
  providers: [
    CacheService,
    LoggerService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
