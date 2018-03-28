import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FinanceService} from '../finance.service';
import {NzMessageService} from 'ng-zorro-antd';
import {MERCHANT_GOLD_TYPE} from '../../../constant/dictionary';

@Component({
  selector: 'app-account-recharge',
  templateUrl: './account-recharge.component.html',
  styleUrls: ['./account-recharge.component.scss']
})
export class AccountRechargeComponent implements OnInit {

  title = '账户充值'
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
    this.page.in_out = 2;//1消费2充值
    this.financeService.pagination(this.page).subscribe((resp)=>{
      console.log(resp)
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
