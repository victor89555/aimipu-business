/**
 * Created by zoushuiyun on 2017/7/3.
 */
import {isNullOrUndefined} from "util";

/**
 * String 相关共用工具方法
 *
 * Created by zoushuiyun on 2017/7/3.
 */
export function myValidNull(val:any) {
  if(val!=0&&(isNullOrUndefined(val)||val=="")){
    return true
  }else {
    return false
  }
}
export function timeToString(timestamp) {

  if (("" + timestamp).indexOf(':')) {
    return ("" + timestamp).replace(":", '-').replace(":", '-')
  }

  let value = new Date(timestamp)
  let year = value.getFullYear().toString()
  let month = (value.getMonth() + 1).toString()
  let date = value.getDate().toString()
  let hour = value.getHours().toString()
  let minute = value.getMinutes().toString()
  let second = value.getSeconds().toString()

  if (month.length == 1) {
    month = '0' + month
  }

  if (date.length == 1) {
    date = '0' + date
  }

  if (hour.length == 1) {
    hour = '0' + hour
  }

  if (minute.length == 1) {
    minute = '0' + minute
  }

  if (second.length == 1) {
    second = '0' + second
  }

  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
}

export function getUrlQuery(name: string){
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return r[2];
  return null;
}

export function getRandomNum(min: number, max: number) {
  let random = Math.random() * (max - min + 1) + min + "";
  return parseInt(random, 10);
}
