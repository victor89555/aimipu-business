import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {FinanceService} from '../finance.service';
import {MERCHANT_GOLD_TYPE} from '../../../constant/dictionary';

@Component({
  selector: 'app-consumption-record',
  templateUrl: './consumption-record.component.html',
  styleUrls: ['./consumption-record.component.scss']
})
export class ConsumptionRecordComponent implements OnInit {

  title = '商家消费记录'
  isLoading:boolean=false;
  keyword:any;
  page:any={current_page:1,per_page:10,total: 0,data:[]};

  goldType:any[]=MERCHANT_GOLD_TYPE;

  constructor(private message:NzMessageService,
              private financeService:FinanceService) { }

  ngOnInit() {
    this.initPage();
  }

  initPage(){
    this.isLoading = true;
    this.page.keyword = this.keyword;
    this.page.in_out = 1;//1消费2充值
    this.financeService.pagination(this.page).subscribe((resp)=>{
      if(resp.status=="success"){
        this.page = resp.data;
      }else {
        this.message.warning(resp.message);
      }
      this.isLoading = false;
    },error=>{
      console.log(error)
      this.isLoading = false;
    })
  }
  search(){
    this.page={current_page:1,per_page:10,total: 0,data:[]};
    this.initPage();
  }

  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]};
    this.page.page=pageNo;
    this.initPage();
  }

}
