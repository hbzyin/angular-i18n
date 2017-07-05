/**
 * Created by hbzyin on 27/06/2017.
 */
import {Injectable} from "@angular/core";
import {BillStatus} from "./billstatus";
const BILLSTATUS_LIST: BillStatus[] = [
  {code: 'paid', nameCn: '已结算', nameEn: 'Paid'},
  {code: 'unpaid', nameCn: '未结算', nameEn: 'Unpaid'},
  {code: 'generated', nameCn: '系统生成', nameEn: 'Systerm initialized'},

];

@Injectable()
export class BillStatusService {

  getAllStatus(): BillStatus[] {
    return BILLSTATUS_LIST;
  }
}