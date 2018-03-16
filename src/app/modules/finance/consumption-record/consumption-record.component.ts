import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-consumption-record',
  templateUrl: './consumption-record.component.html',
  styleUrls: ['./consumption-record.component.scss']
})
export class ConsumptionRecordComponent implements OnInit {

  title = '商家消费记录'
  validateForm: FormGroup
  _startDate = ''
  _endDate = ''
  data = [
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
    {
      userId: '001',
      type: '试用奖励',
      shopName: 'XX淘宝店',
      goodsName: '儿童玩具',
      number: 60,
      price: 10,
      reward: 1,
      total: '-600',
      balance: '2300',
      operationTime: '2018-05-20',
      serialNum: '20180520111111'
    },
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      textInput: [ '', [ Validators.required ] ]
    })
  }
}
