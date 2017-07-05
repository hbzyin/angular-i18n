import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {Http} from "@angular/http";
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from "ng2-translate";
import {BillStatusService} from "./shared/billstatus.service";

// 1. 加载国际化指令文件解析路径
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),// 2根模块配置国际化
  ],
  providers: [TranslateService,BillStatusService], // 3 根模块引入服务TranslateService
  bootstrap: [AppComponent]
})
export class AppModule { }
