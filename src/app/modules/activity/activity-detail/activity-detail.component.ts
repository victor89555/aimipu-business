import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {

  validateForm: FormGroup;
  content:any= '';
  callBack(e){
    // console.log(e)
  }

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.validateForm = this.fb.group({
      source: [ null, [ Validators.required ] ],
      name: [ null ],
      postage: [ null ],
      endTime: [ '' ],

      title: [ '', [ Validators.required ] ],
      type: [ '', [ Validators.required ] ],
      quantity: [ '', [ Validators.required ] ],
      price: [ '', [ Validators.required ] ],
      taoBaoId: [ '', [ Validators.required ] ],
      coins: [ '', [ Validators.required ] ],
    });
  }

  SubmitApplication(){
    console.log('点击提交申请')
    if(this.verifyAll()){
      console.log('确认提交！')
    }else{
      console.log('提交取消！')
    }
  }
  //验证所有
  verifyAll() {

  }

}
