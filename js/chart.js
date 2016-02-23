function lineChart() {
        var ctx = document.getElementById('myChart').getContext("2d")
        var data = {

            labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],

            datasets: [{

                label: "",
                // 填充颜色
                fillColor: "rgba(140,216,229,0.2)",
                // 线的颜色
                strokeColor: "rgba(151,187,205,1",
                // 点的填充颜色
                pointColor: "rgba(151,187,205,1)",
                // 点的边线颜色
                pointStrokeColor: "#fff",

                pointHighlightFill: "#fff",

                pointHighlightStroke: "rgba(220,220,220,1)",

                data: [10000,30000, 80000, 40000,10000,100000,80000, 40000,10000,50000]

            }]

        };


        // var salesVolumeChart = new Chart(ctx).Line(data);

        var salesVolumeChart = new Chart(ctx).Line(data, {

            // 小提示的圆角

            // tooltipCornerRadius: 0,

            // 折线的曲线过渡，0是直线，默认0.4是曲线

            bezierCurveTension: 0,

            // bezierCurveTension: 0.4,

            // 关闭曲线功能

            bezierCurve: false,

            // 背景表格显示

            // scaleShowGridLines : false,

            // 点击的小提示

            tooltipTemplate: "<%if (label){%><%=label%>入账金额：<%}%><%= value %>元",

            //自定义背景小方格、y轴每个格子的单位、起始坐标

            scaleOverride: true,

            scaleSteps: 6.5,


            // scaleStepWidth: Math.ceil(Math.max.apply(null,data.datasets[0].data) / 0.1),

            scaleStepWidth: 20000,

            scaleStartValue: 0

        });

    }

    function barChart() {

        var ctx = document.getElementById('myChart2').getContext("2d")

        var data = {

            labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],

            datasets: [{

                label: "",

                fillColor: "rgba(153,204,153,0.5)",

                strokeColor: "rgba(0,102,51,1)",

                pointColor: "rgba(220,220,220,1)",

                pointStrokeColor: "#338033",

                pointHighlightFill: "#338033",

                pointHighlightStroke: "rgba(220,220,220,1)",

                data: [10000,30000, 80000, 40000,10000,100000,120000, 40000,10000,50000,20000,10000]

            }]

        };

        var salesVolumeChart = new Chart(ctx).Bar(data, {

            // 点击的小提示

            tooltipTemplate: "<%if (label){%><%=label%> 提现金额：<%}%><%= value %>元",
           
        });

    };




    

    // 启动

    setTimeout(function() {

        // 避免IE7-8 调用getContext报错，使用setTimeout

        lineChart()

        barChart()
        doughChart()

    }, 0)

    // 在手机测试，canvas中的动画看起来很卡，性能很差

    // PC上还不错

    if (/Mobile/i.test(navigator.userAgent)) {

        //针对手机，性能做一些降级，看起来就不会那么卡了

        Chart.defaults.global.animationSteps = Chart.defaults.global.animationSteps / 6

        Chart.defaults.global.animationEasing = "linear"

    };


    // 成员管理 环形图
    function doughChart1() {
         var ctx = new Chart(document.getElementById("doughChart1").getContext("2d"));
         var options = {
             scaleFontSize: 13,
             scaleFontColor: "#ffa45e"
         };
         var doughnutChart = [{
             value: 4,
             color: "#38cccb"
         }, {
             value: 16,
             color: "#eee"
        
         }];
         var myRingChart = ctx.Doughnut(doughnutChart);
    };
    function doughChart2() {
         var ctx = new Chart(document.getElementById("doughChart2").getContext("2d"));
         var options = {
             scaleFontSize: 13,
             scaleFontColor: "#ffa45e"
         };
         var doughnutChart = [{
             value: 4,
             color: "#38cccb"
         }, {
             value: 16,
             color: "#eee"
        
         }];
         var myRingChart = ctx.Doughnut(doughnutChart);
    };
    function doughChart3() {
         var ctx = new Chart(document.getElementById("doughChart3").getContext("2d"));
         var options = {
             scaleFontSize: 13,
             scaleFontColor: "#ffa45e"
         };
         var doughnutChart = [{
             value: 4,
             color: "#38cccb"
         }, {
             value: 16,
             color: "#eee"
        
         }];
         var myRingChart = ctx.Doughnut(doughnutChart);
    };
    doughChart1();
    doughChart2();
    doughChart3();
   

   