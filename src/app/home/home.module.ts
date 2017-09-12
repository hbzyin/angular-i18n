import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {DetailComponent} from './detail/detail.component';
import { TranslateModule} from "ng2-translate";
import {FileUploadModule} from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,// 每个功能模块均需单独引入
    HomeRoutingModule,
    FileUploadModule//上传文件模块
  ],
  declarations: [
    MainComponent,
    LoginComponent,
    DetailComponent
  ],
  providers: [
  ]
})
export class HomeModule {
}
