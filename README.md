# Angular2 I18n with ng2-translate module demo

## 一、 示例运行步骤：
> 1. 克隆到本地：`git clone git@github.com:hbzyin/angular-i18n.git 'angular-i18n'`
> 2. 打开文件夹：`cd angular-i18n`
> 3. 安装依赖包：`npm install`
> 4. 本地运行：  `ng serve -o`   （此处带参数`-o`自动打开浏览器）

## 二 、项目引入国际化操作步骤
### 1. 安装 *国际化插件* 
  run `npm install ng2-translate --save`
  
### 2. 根模块导入插件
    1. 自定义国际化文件路径; 
    2. 配置国际化模块 （每个模块均需导入）
        1. 根模块导入 ：TranslateModule.forRoot(...)
        2. 功能模块导入：TranslateModule
    3. 注入国际化服务 TranslateService

```angular2html
export function createTranslateLoader(http: Http) {                 // 1. 加载国际化指令文件解析路径
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
    }),                                                         // 2根模块配置国际化
  ],
  providers: [TranslateService,BillStatusService],              // 3 根模块引入服务TranslateService
  bootstrap: [AppComponent]
```

### 3. 页面模板

页面中需要翻译的内容配置成变量
如：
```angular2html
  <div>{{ 'HELLO1' | translate }}</div>   // 管道方式，此种方式仅替换指定字段
  <div translate>HELLO2</div>             // 指令方式,此种方式替代标签内所有内容
```
### 4. 配置翻译文件 

根据2.1中配置的国际化文件路径创建国际化文件 如中英文两种，分别创建 `assets/i18n/en.json`、`assets/i18n/zh.json`文件

### 5. 根模块中启动国际化功能 `AppComponent`
    1. 引入服务；
    2. 设置默认语言；
    3. 检测当前浏览器语言;
    4. 保存当前浏览器语言之本地存储;
    5. 根据检测到语言，初始化语言版本;
    6. 手动切换语言版本事件
```angular2html
export class AppComponent {c
  lang:string;
  constructor(
    public translate:TranslateService                 // 5.1 引入服务 
  ) {
  }
  ngOnInit(){
    this.translate.setDefaultLang('zh');              // 5.2 设置默认语言
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
```

### 6. 数据字典语言切换  `MainComponent`为例
    1. 页面翻译代码设置： main.component.html
    
    `<td class="text-center">{{bill[name]}}</td>`   //name为语言标识字
    
    2. 组件
        1. 当前组件语言初始化
        2. 当前组件语言实时切换：事件钩子translate.onLangChange.subscribe()
    
    
 
```angular2html
export class MainComponent implements OnInit {
  public billstate;
  public name: string = 'nameCn';

  constructor(public billservice: BillStatusService,
              public translate: TranslateService) {
  }
  ngOnInit() {
      this.billstate = this.billservice.getAllStatus();
      this.name = 'name'+(localStorage.getItem('browserLang')== 'en' ? 'En' : 'Cn');  // 当前组件语言设置 ：根据本地存储语言版本标识，初始化
      this.translate.onLangChange.subscribe(                                          // 当前组件语言设置：实时切换
        (event: LangChangeEvent) => {
          let preLang = event.lang == 'en' ? 'En' : 'Cn';
          this.name = 'name' + preLang;
        }
      )
  }
}
```
