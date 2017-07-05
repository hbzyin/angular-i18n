import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {BillStatusService} from "../../shared/billstatus.service";
import {TranslateService, LangChangeEvent} from "ng2-translate";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
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
