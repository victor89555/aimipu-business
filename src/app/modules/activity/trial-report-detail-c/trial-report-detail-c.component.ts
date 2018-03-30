import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzModalSubject} from 'ng-zorro-antd';
import {ActivityService} from '../share/service/activity.service';

@Component({
  selector: 'app-trial-report-detail-c',
  templateUrl: './trial-report-detail-c.component.html',
  styleUrls: ['./trial-report-detail-c.component.scss']
})
export class TrialReportDetailCComponent implements OnInit {

  data:any = {}
  reason: string = ''
  isEmpty:boolean = false

  constructor(private subject: NzModalSubject,
              private activityService: ActivityService,
              private messageService: NzMessageService,) {
    this.subject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  ngOnInit() {
    this.data.thumb = JSON.parse(this.data.thumb)
  }

  //通过
  doPass(){
    let content:any = {status: 5}
    this.activityService
      .changeApplicationStatus(this.data.id,content)
      .subscribe((res)=>{
        console.log(res)
        this.messageService.success('提交通过成功！')
        this.emitDataOutside()
    })
  }
  //提交修改
  doEdit(){
    if(this.checkEmpty()){
      let content:any = {status: 3,turned_reason:this.reason}
      this.activityService
        .changeApplicationStatus(this.data.id,content)
        .subscribe((res)=>{
          console.log(res)
          this.messageService.info('提交修改已提交！')
          this.emitDataOutside()
        })
    }
  }
  //终止试用
  doTermination(){
    if(this.checkEmpty()){
      let content:any = {status: 0,failed_reason:this.reason}
      this.activityService
        .changeApplicationStatus(this.data.id,content)
        .subscribe((res)=>{
          console.log(res)
          this.messageService.info('终止试用已提交！')
          this.emitDataOutside()
        })
    }
  }

  onInput(e){
    this.checkEmpty()
  }

  checkEmpty(){
    if(this.reason.trim()==''){
      this.isEmpty = true
      return false
    }else {
      this.isEmpty = false
      return true
    }
  }

  emitDataOutside() {
    this.subject.next();
    this.subject.destroy('onOk');
  }

}
