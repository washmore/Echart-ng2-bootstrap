import {Injectable} from "@angular/core";
/**
 * Created by Washmore on 2016/9/14.
 */
@Injectable()
export class CommonUtils {
    sayHello(name:string):void {
        console.info("hello!" + name);
    }

    getDateStr(time, isFull) {
        var now = new Date(time);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var str = year + "-" + month + "-" + date;
        if (isFull === true) {
            str += " " + hour + ":" + minute + ":" + second;
        }
        return str;
    }
}

