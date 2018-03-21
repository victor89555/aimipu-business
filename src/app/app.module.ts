import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CurrUserService} from './shared/service/curr-user.service';
import {AppService} from './shared/service/app.service';
import {LoggerService} from './shared/service/logger.service';
import {CacheService} from './shared/service/cache.service';
import {ModulesModule} from './modules/modules.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImageService} from './modules/activity/image-upload/image.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ModulesModule
  ],
  providers: [
    CacheService,
    LoggerService,
    AppService,
    CurrUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
