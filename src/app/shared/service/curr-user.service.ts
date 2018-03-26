/**
 * Created by zoushuiyun on 2017/3/28.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BaseService} from "./base.service";
import {CacheService} from "./cache.service";
import {Observer, Observable} from "rxjs";
import {CurrUserModel} from '../models/curr-user.model';

@Injectable()
export class CurrUserService extends BaseService {


  currUserChange: Observable<any>
  private currUserChangeObserver: Observer<CurrUserModel>

  constructor(http: Http,cacheService: CacheService) {
    super(http,cacheService)
    this.currUserChange = new Observable<CurrUserModel>((observer) => {
        this.currUserChangeObserver = observer;
      }
    ).share()
  }

  clearCurrUser() {
    let user = new CurrUserModel(null,null,null);
    this.cacheService.setCurrUser(user)
    this.currUserChangeObserver.next(user);
  }

  setCurrUser(currUser:CurrUserModel){
    this.currUserChangeObserver.next(currUser)
    this.cacheService.setCurrUser(currUser)
  }

}

