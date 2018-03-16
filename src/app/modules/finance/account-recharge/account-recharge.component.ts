import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-recharge',
  templateUrl: './account-recharge.component.html',
  styleUrls: ['./account-recharge.component.scss']
})
export class AccountRechargeComponent implements OnInit {

  title = '账户充值'
  validateForm: FormGroup
  _startDate = ''
  _endDate = ''
  data = [
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
    {
      userId: '001',
      amount: '+10000',
      type: '余额充值',
      rechargeTime: '2018-05-20',
      operationTime: '2018-05-20',
      operator: '马云',
    },
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      textInput: [ '', [ Validators.required ] ]
    })
  }

}
