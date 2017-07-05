import {Component} from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang:string;
  constructor(
    public translate:TranslateService                 // 5.1 引入服务
  ) {
  }
  ngOnInit(){
    this.translate.setDefaultLang('cn');              // 5.2 设置默认语言
    this.lang=this.translate.getBrowserCultureLang(); // 5.3 检测当前浏览器语言
    localStorage.setItem("browserLang",this.lang);     // 5.4 保存当前浏览器语言之本地存储  ----》供后续手动切换语言版本
    this.translate.use(this.lang);                    // 5.5 根据检测到语言，初始化语言版本
  }
  changeLang(){                                       // 5.6 手动切换语言版本
    this.lang=this.lang=='en'?'zh':'en';
    localStorage.setItem("browserLang",this.lang);
    this.translate.use(this.lang);
  }
}

