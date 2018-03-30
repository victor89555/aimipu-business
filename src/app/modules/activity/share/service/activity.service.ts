import { Injectable } from '@angular/core';
import {Body, GET, Path, POST, PUT, Query, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ActivityInfo} from '../../activity-detail/activity-detail.model';

@Injectable()
export class ActivityService extends RebirthHttp{

  constructor(http: HttpClient) {
    super(http);
  }

  //获取商户店铺列表
  @GET('/api/merchant/shop')
  getShops():Observable<any>{
    return null
  }

  //获取试用活动信息
  @GET('/api/merchant/project/:id')
  getActivityInfo(@Path('id') id:number):Observable<any>{
    return null
  }
  //新增试用活动
  @POST('/api/merchant/project')
  addActivity(@Body activityInfo: ActivityInfo):Observable<any>{
    return null
  }
  //修改试用信息
  @PUT('/api/merchant/project/:id')
  editActivityInfo(@Path("id") id:number, @Body activityInfo: ActivityInfo):Observable<any>{
    return null
  }

  //试用管理分页列表
  @POST('/api/merchant/project/pagination')
  query1(@Body page):Observable<any>{
    return null
  }

  getPending(page):Observable<any>{
    page.auditing_status = 1
    return this.query1(page).map((res)=>{
      return res
    })
  }
  getPassed(page):Observable<any>{
    page.auditing_status = 2
    return this.query1(page).map((res)=>{
      return res
    })
  }
  getFailed(page):Observable<any>{
    page.auditing_status = 3
    return this.query1(page).map((res)=>{
      return res
    })
  }
  getPublished(page):Observable<any>{
    page.auditing_status = 4
    return this.query1(page).map((res)=>{
      return res
    })
  }
  getDone(page):Observable<any>{
    page.auditing_status = 5
    return this.query1(page).map((res)=>{
      return res
    })
  }

  //试用申请列表
  @POST('api/merchant/apply/pagination')
  query2(@Body page):Observable<any>{
    return null
  }
  getApplicationList(page):Observable<any>{
    page.type = 1
    return this.query2(page).map((res)=>{
      return res
    })
  }
  getReportList(page):Observable<any>{
    page.type = 4
    return this.query2(page).map((res)=>{
      return res
    })
  }

  //审核申请试用状态
  //status 0试用终止 1待审核 2待提交 3待修改 4待确认 5已完成 6审核不通过
  //failed_reason 状态 0、6 时必填
  //turned_reason 状态 3 时必填
  @PUT('/api/merchant/apply/:id')
  changeApplicationStatus(@Path('id') applicationId:number,@Body content):Observable<any>{
    return null
  }



}

