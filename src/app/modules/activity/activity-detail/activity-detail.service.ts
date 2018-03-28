import { Injectable } from '@angular/core';
import {Body, GET, Path, POST, PUT, Query, RebirthHttp} from 'rebirth-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ActivityInfo} from './activity-detail.model';

@Injectable()
export class ActivityDetailService extends RebirthHttp{

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
  query(@Query("keyword") keyword:string,@Query("auditing_status") status:number):Observable<any>{
    return null
  }

  getPending():Observable<any>{
    return this.query('',1).map((res)=>{
      return res
    })
  }
  getPassed():Observable<any>{
    return this.query('',2).map((res)=>{
      return res
    })
  }
  getFailed():Observable<any>{
    return this.query('',3).map((res)=>{
      return res
    })
  }
  getPublished():Observable<any>{
    return this.query('',4).map((res)=>{
      return res
    })
  }
  getDone():Observable<any>{
    return this.query('',5).map((res)=>{
      return res
    })
  }


}
