/**
 * Created by zoushuiyun on 2016/12/26.
 */
import {OnInit, Injectable} from "@angular/core";

/**
 * 缓存服务  将ajax请求的一些状态数据存储到sessionStorage中，避免系统中频繁请求提升用户体验
 */
@Injectable()
export class CacheService implements OnInit {

  static CACHE_INIT_OVER:string = "CACHE_INIT_OVER"
  static APP_INFO_KEY:string = "APP_INFO"//存toke相关信息
  static PERMISSION_KEY:string = "PERMISSION"
  static CURR_USER_KEY:string = "USER"
  static CURR_USER_INFO_KEY:string = "USER_INFO"
  static BRAND_KEY: string = "BRAND"
  static SHOPS_KEY: string = "SHOPS"
  static SHOPS_DICT_KEY: string = "SHOPS_DICT"
  static SERIESES_KEY: string = "SERIESES"
  static SERIESES_DICT_KEY: string = "SERIESES_DICT"
  static SERIESES_SCENNUM_DICT_KEY: string = "SERIESES_SCENNUM_DICT"
  static WORKERS_KEY:string = "WORKERS"
  static WORKERS_DICT_KEY:string = "WORKERS_DICT"
  static WORKER_HEADIMG_DICT_KEY:string = "WORKER_HEADIMG_DICT_KEY"
  static ROLES_KEY:string = "ROLES"
  static ROLES_DICT_KEY:string = "ROLES_DICT"

  static CUSTOMERS_KEY:string="CUSTOMER"
  static CUSTOMERS_DICT_KEY:string="CUSTOMER_DICT"
  static CUSTOMERS_MOBILE_DICT_KEY:string="CUSTOMER_MOBILE_DICT"
  static CUSTOMERS_ADDRESS_DICT_KEY:string="CUSTOMER_ADDRESS_DICT"


  ngOnInit(): void {
    if (typeof window.localStorage == 'undefined') {
      alert("请使用chrome或更高版本的IE浏览器")
    }
  }

  private add(key, obj) {
    if (obj) {
      if (typeof obj === 'object') {
        //storage中只能存储字符串，所以将json对象转换成字符串
        let objStr = JSON.stringify(obj)
        window.sessionStorage.setItem(key, objStr);
      } else {
        window.sessionStorage.setItem(key, obj);
      }
    }
  }

  private get(key) {
    let objStr = window.sessionStorage.getItem(key)
    if (objStr) {
      try {
        //重新转换为对象
        return JSON.parse(objStr)
      } catch (err) {

      }
    }
    return objStr;
  }

  clear() {
    window.sessionStorage.removeItem(CacheService.CACHE_INIT_OVER)
    window.sessionStorage.removeItem(CacheService.APP_INFO_KEY)
    window.sessionStorage.removeItem(CacheService.PERMISSION_KEY)
    window.sessionStorage.removeItem(CacheService.CURR_USER_KEY)
    window.sessionStorage.removeItem(CacheService.CURR_USER_INFO_KEY)
    window.sessionStorage.removeItem(CacheService.BRAND_KEY)
    window.sessionStorage.removeItem(CacheService.SHOPS_KEY)
    window.sessionStorage.removeItem(CacheService.SHOPS_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.SERIESES_KEY)
    window.sessionStorage.removeItem(CacheService.SERIESES_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.SERIESES_SCENNUM_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.WORKERS_KEY)
    window.sessionStorage.removeItem(CacheService.WORKERS_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.WORKER_HEADIMG_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.ROLES_KEY)
    window.sessionStorage.removeItem(CacheService.ROLES_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.CUSTOMERS_KEY)
    window.sessionStorage.removeItem(CacheService.CUSTOMERS_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.CUSTOMERS_MOBILE_DICT_KEY)
    window.sessionStorage.removeItem(CacheService.CUSTOMERS_ADDRESS_DICT_KEY)
  }

  /**
   * 缓存用户数据
   * @param currUser
   */
  setInitOver(systemCacheInit:boolean) {
    this.add(CacheService.CACHE_INIT_OVER, systemCacheInit);
  }

  /**
   * 获取用户数据
   * @returns {any|any}
   */
  getInitOver():any {
    return this.get(CacheService.APP_INFO_KEY)
  }
  /**
   * 缓存用户数据
   * @param currUser
   */
  setAppInfo(appInfo:any) {
    this.add(CacheService.APP_INFO_KEY, appInfo);
  }

  /**
   * 获取用户数据
   * @returns {any|any}
   */
  getAppInfo():any {
      let result =  this.get(CacheService.APP_INFO_KEY)
      return result
  }
  /**
   * 缓存权限数据
   * @param currUser
   */
  setPermissionInfo(appInfo:any) {
    this.add(CacheService.PERMISSION_KEY, appInfo);
  }

  /**
   * 获取权限数据
   * @returns {any|any}
   */
  getPermissionInfo():any {
    return this.get(CacheService.PERMISSION_KEY)
  }
  /**
   * 缓存用户数据详细数据
   * @param currUser
   */
  setCurrUserInfo(currUserInfo:any) {
    this.add(CacheService.CURR_USER_INFO_KEY, currUserInfo);
  }

  /**
   * 获取用户数据 详细数据
   * @returns {any|any}
   */
  getCurrUserInfo():any {
    return this.get(CacheService.CURR_USER_INFO_KEY)
  }


  /**
   * 缓存用户数据
   * @param currUser
   */
  setCurrUser(currUser:any) {
    this.add(CacheService.CURR_USER_KEY, currUser);
  }

  /**
   * 获取用户数据
   * @returns {any|any}
   */
  getCurrUser():any {
    return this.get(CacheService.CURR_USER_KEY)
  }

  /**
   * 缓存品牌数据
   * @param brand
   */
  setBrand(brand: any) {
    this.add(CacheService.BRAND_KEY, brand)
  }

  /**
   * 获取品牌信息
   */
  getBrand(): any {
    return this.get(CacheService.BRAND_KEY)
  }
  /**
 * 缓存店铺数据
 * @param brand
 */
setShops(shops: any) {
  this.add(CacheService.SHOPS_KEY, shops)
}

  /**
   * 获取店铺信息
   */
  getShops(): any {
    return this.get(CacheService.SHOPS_KEY)
  }
  /**
   * 缓存店铺数据
   * @param brand
   */
  setShopDict(shopDict: any) {
    this.add(CacheService.SHOPS_DICT_KEY, shopDict)
  }

  /**
   * 获取店铺信息
   */
  getShopDict(): any {
    return this.get(CacheService.SHOPS_DICT_KEY)
  }
  /**
   * 缓存套餐数据
   * @param brand
   */
  setSerieses(serieses: any) {
    this.add(CacheService.SERIESES_KEY, serieses)
  }

  /**
   * 获取套餐信息
   */
  getSerieses(): any {
    return this.get(CacheService.SERIESES_KEY)
  }
  /**
   * 缓存套餐名称数据
   * @param brand
   */
  setSeriesesDict(seriesDict: any) {
    this.add(CacheService.SERIESES_DICT_KEY, seriesDict)
  }

  /**
   * 获取套餐名称信息
   */
  getSeriesesDict(): any {
    return this.get(CacheService.SERIESES_DICT_KEY)
  }
  /**
   * 缓存套餐场景数数据
   * @param brand
   */
  setSeriesesScenNumDict(seriesScenNumDict: any) {
    this.add(CacheService.SERIESES_SCENNUM_DICT_KEY, seriesScenNumDict)
  }

  /**
   * 获取套餐场景数信息
   */
  getSeriesesScenNumDict(): any {
    return this.get(CacheService.SERIESES_SCENNUM_DICT_KEY)
  }
  /**
   * 缓存工作人员数据
   * @param brand
   */
  setWorkers(workers: any) {
    this.add(CacheService.WORKERS_KEY, workers)
  }
  /**
   * 获取工作人员信息
   */
  getWorkers(): any {
    return this.get(CacheService.WORKERS_KEY)
  }
  /**
   * 缓存工作人员名称数据
   * @param brand
   */
  setWorkersDict(workerDict: any) {
    this.add(CacheService.WORKERS_DICT_KEY, workerDict)
  }
  /**
   * 获取工作人员名称信息
   */
  getWorkersDict(): any {
    return this.get(CacheService.WORKERS_DICT_KEY)
  }
  /**
   * 缓存工作人员头像数据
   * @param brand
   */
  setWorkerHeadImgDict(workerHeadImgDict: any) {
    this.add(CacheService.WORKER_HEADIMG_DICT_KEY, workerHeadImgDict)
  }
  /**
   * 获取工作人员头像信息
   */
  getWorkerHeadImgDict(): any {
    return this.get(CacheService.WORKER_HEADIMG_DICT_KEY)
  }

  /**
   * 缓存套餐数据
   * @param brand
   */
  setRoles(roles: any) {
    this.add(CacheService.ROLES_KEY, roles)
  }
  /**
   * 获取角色信息
   */
  getRoles(): any {
    return this.get(CacheService.ROLES_KEY)
  }
  /**
   * 缓存套餐数据
   * @param brand
   */
  setRolesDict(roleDict: any) {
    this.add(CacheService.ROLES_DICT_KEY, roleDict)
  }
  /**
   * 获取角色信息
   */
  getRolesDict(): any {
    return this.get(CacheService.ROLES_DICT_KEY)
  }


  /**
   * 缓存客户数据
   * @param brand
   */
  setCustomers(customers: any) {
    this.add(CacheService.CUSTOMERS_KEY, customers)
  }

  /**
   * 获取客户信息
   */
  getCustomers(): any {
    return this.get(CacheService.CUSTOMERS_KEY)
  }
  /**
   * 缓存客户姓名数据
   * @param brand
   */
  setCustomersDict(cusTomersDict: any) {
    this.add(CacheService.CUSTOMERS_DICT_KEY, cusTomersDict)
  }

  /**
   * 获取客户姓名信息
   */
  getCustomersDict(): any {
    return this.get(CacheService.CUSTOMERS_DICT_KEY)
  }
  /**
   * 缓存客户电话数据
   * @param brand
   */
  setCustomersMobileDict(cusTomersMobileDict: any) {
    this.add(CacheService.CUSTOMERS_MOBILE_DICT_KEY, cusTomersMobileDict)
  }

  /**
   * 获取客户电话信息
   */
  getCustomersMobileDict(): any {
    return this.get(CacheService.CUSTOMERS_MOBILE_DICT_KEY)
  }
  /**
   * 缓存客户地址数据
   * @param brand
   */
  setCustomersAddressDict(customerAddressDict: any) {
    this.add(CacheService.CUSTOMERS_ADDRESS_DICT_KEY, customerAddressDict)
  }

  /**
   * 获取客户地址信息
   */
  getCustomersAddressDict(): any {
    return this.get(CacheService.CUSTOMERS_ADDRESS_DICT_KEY)
  }
  //--------------------------------------------------------------------------------------------------------------

  // updateCustomer(customer) {
  //   window.sessionStorage.removeItem(CacheService.CUSTOMER_KEY)
  //   this.add(CacheService.CUSTOMER_KEY, customer);
  // }



}
