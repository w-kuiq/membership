function lineChart() {
        var ctx = document.getElementById('myChart').getContext("2d")
        var data = {

            labels: ["2014-10", "2014-11", "2014-12", "2015-1", "2015-2", "2015-3"],

            datasets: [{

                label: "",

                fillColor: "rgba(220,220,220,0.2)",

                strokeColor: "rgba(0,102,51,1)",

                pointColor: "rgba(220,220,220,1)",

                pointStrokeColor: "#339933",

                pointHighlightFill: "#339933",

                pointHighlightStroke: "rgba(220,220,220,1)",

                data: [1.27, 1.30, 1.30, 1.41, 1.04, 1.29]

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

            tooltipTemplate: "<%if (label){%><%=label%> 销量：<%}%><%= value %>万辆",

            //自定义背景小方格、y轴每个格子的单位、起始坐标

            scaleOverride: true,

            scaleSteps: 9.5,

            // scaleStepWidth: Math.ceil(Math.max.apply(null,data.datasets[0].data) / 0.1),

            scaleStepWidth: 0.05,

            scaleStartValue: 1

        });

    }

    function barChart() {

        var ctx = document.getElementById('myChart2').getContext("2d")

        var data = {

            labels: ["2014-10", "2014-11", "2014-12", "2015-1", "2015-2", "2015-3"],

            datasets: [{

                label: "",

                fillColor: "rgba(153,204,153,0.5)",

                strokeColor: "rgba(0,102,51,1)",

                pointColor: "rgba(220,220,220,1)",

                pointStrokeColor: "#338033",

                pointHighlightFill: "#338033",

                pointHighlightStroke: "rgba(220,220,220,1)",

                data: [1.27, 1.30, 1.30, 1.41, 1.04, 1.29]

            }]

        };

        var salesVolumeChart = new Chart(ctx).Bar(data, {

            // 点击的小提示

            tooltipTemplate: "<%if (label){%><%=label%> 销量：<%}%><%= value %>万辆"

        });

    }

    // 启动

    setTimeout(function() {

        // 避免IE7-8 调用getContext报错，使用setTimeout

        lineChart()

        barChart()

    }, 0)

    // 在手机测试，canvas中的动画看起来很卡，性能很差

    // PC上还不错

    if (/Mobile/i.test(navigator.userAgent)) {

        //针对手机，性能做一些降级，看起来就不会那么卡了

        Chart.defaults.global.animationSteps = Chart.defaults.global.animationSteps / 6

        Chart.defaults.global.animationEasing = "linear"

    }