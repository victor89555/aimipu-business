/**
 * Created by wuqilong on 2018/3/22.
 */
/*
 *   功能:实现VBScript的DateAdd功能.
 *   参数:interval,字符串表达式，表示要添加的时间间隔.
 *   y年、m月、w周、d天
 *   参数:number,数值表达式，表示要添加的时间间隔的个数.
 *   参数:date,时间对象.
 *   返回:新的时间对象.
 *   var now = new Date();
 *   var newDate = DateAdd( "d", 5, now);
 *---------------   DateAdd(interval,number,date)   -----------------
 */
export function DateAdd(interval, number, date) {
  switch (interval) {
    case "y ": {
      date.setFullYear(date.getFullYear() + number);
      return date;
    }
    case "m ": {
      date.setMonth(date.getMonth() + number);
      return date;
    }
    case "w ": {
      date.setDate(date.getDate() + number * 7);
      return date;
    }
    case "d ": {
      date.setDate(date.getDate() + number);
      return date;
    }
    default: {
      date.setDate(date.getDate() + number);
      return date;
    }
  }
}
