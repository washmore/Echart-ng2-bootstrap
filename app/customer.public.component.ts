import {Component, OnInit} from "@angular/core";
import {CommonUtils} from "./common.utils";
import {CustomerPublic} from "./customer.public";
import {CustomerService} from "./customer.service";
import Date = core.Date;
declare let echarts;
declare let $;
@Component({
    selector: 'my-userDailyReport',
    templateUrl: 'app/customer.public.component.html',
    styleUrls: ['app/customer.public.component.css'],
})
export class CustomerPublicComponent implements OnInit {
    customerPublicDaily:CustomerPublic[] = [];

    constructor(private customerService:CustomerService,
                private commonUtils:CommonUtils) {
    }

    ngOnInit():void {
        this.customerService.getCustomerPublicDaily().then(customerPublicDaily => {
            console.info(customerPublicDaily);
            this.customerPublicDaily = customerPublicDaily;
            this.bulidEchart();
        });
    }

    bulidEchart():void {
        let myChart = echarts.init(document.getElementById("customerPublicDaily"));
        // 过渡---------------------
        myChart.showLoading({text: '加载中...'});
        // 指定图表的配置项和数据
        let option = this.initEchartView();
        let that = this;
        $.each(this.customerPublicDaily, function (i, e) {
            option.series[0].data .push(e.up);
            option.series[1].data .push(0 - e.down);
            option.series[2].data .push(e.total);
            option.xAxis[0].data.push(that.commonUtils.getDateStr(e.ctime, false));
        });
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.hideLoading();
    }

    initEchartView():any {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['公客新增/跳公', '公客拉私', '公客总量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisLabel: {
                        interval: 0
                    }
                }
            ],
            yAxis: [
                {
                    name: '公客增加',
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '公客新增/跳公',
                    type: 'bar',
                    barWidth: 50,
                    stack: 'customer',
                    data: []
                },
                {
                    name: '公客拉私',
                    type: 'bar',
                    yAxisIndex: 0,
                    stack: 'customer',
                    data: []
                },
                {
                    name: '公客总量',
                    type: 'line',
                    data: []
                }
            ]
        };

    }
}