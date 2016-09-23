import {Component, OnInit} from "@angular/core";
import {UserDailyReoport} from "./userDailyReoport";
import {Http} from "@angular/http";
import {CommonUtils} from "./common.utils";
import Date = core.Date;
declare let echarts;
declare let $;
@Component({
    selector: 'my-userDailyReport',
    templateUrl: 'app/user.daily.report.component.html',
    styleUrls: ['app/user.daily.report.component.css'],
    //providers: [CommonUtils]
})
export class UserDailyReportComponent implements OnInit {
    //reports:UserDailyReoport[];

    constructor(private http:Http,
                private commonUtils:CommonUtils) {

    }

    ngOnInit():void {
        // this.http.get('http://localhost:8080/api/userDailyReport.cross').subscribe(response=>this.reports = response.json());
        this.commonUtils.sayHello("陈雨清");

        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById("main"));
        // 过渡---------------------
        myChart.showLoading({text: '加载中...'});

        // 指定图表的配置项和数据
        let option = {
            title: {
                text: '链家网每日用户新增'
            },
            tooltip: {},
            legend: {
                data: ['用户数']
            },
            xAxis: {
                data: [],
                axisLabel: {
                    interval: 0
                }
            },

            yAxis: {},
            series: [{
                name: '用户数',
                type: 'bar',
                data: []
            }]
        };
        // DateFormatter.format(new Date(Date.now()), "zh_CN", 'yyyy-MM-dd');
        // 指定图表的配置项和数据
        let url = 'http://10.8.204.107:8080/api/userDailyReport.cross';
        this.http.get(url).subscribe(
            res => {
                let result = res.json() as UserDailyReoport[];
                // let times = result.map(res=>this.commonUtils.getDateStr(res.ctime, false));
                // console.info(times);
                let that = this;
                $.each(result, function (i, e) {
                    option.series[0].data.push(e.userCount);
                    option.xAxis.data.push(that.commonUtils.getDateStr(e.ctime, false));
                });
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                myChart.hideLoading();
            }
        );
    }

    ngAfterViewInit() {

    }

}