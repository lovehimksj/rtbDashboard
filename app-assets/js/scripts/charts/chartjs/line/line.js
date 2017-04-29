/*=========================================================================================
    File Name: line.js
    Description: Chartjs simple line chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Line chart
// ------------------------------
$(window).on("load", function(){
    var datapoints = [0, 20, 20, 60, 60, 120, 230, 180, 230, 180, 120, 125, 120, 125, 105, 110, 170,0, 20, 20, 60, 60, 120, 230, 180, 120, 125, 105, 110, 170];
    var datapoints1 = [120, 125, 105, 110, 0, 20, 20, 60, 60, 120, 230,230, 180, 120, 125, 180, 120, 125, 105, 110, 170, 170,0, 20, 20, 60, 60, 120, 230, 180];
    var datapoints2 = [120, 125, 105, 60, 120, 230, 180,0, 20, 20, 60, 60, 120, 230, 180, 230, 180, 120, 125, 120, 125, 105, 110, 170 ,110, 170,0, 20, 20, 60];

    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100 +100);
    };
    //Get the context of the Chart canvas element we want to select
    var ctx = $("#line-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Time'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Counts'
                }
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Legend'
        }
    };

    // Chart Data
    var chartData = {
        labels: ["11:00", "11:00", "11:00", "11:00", "11:00", "11:00", "11:00","11:00", "11:00", "11:00", "11:00", "11:00", "11:00", "11:00","11:00", "11:00", "11:00", "11:00", "11:00", "11:00", "11:00","11:00", "11:00", "11:00", "11:00", "11:00", "11:00", "11:00","11:00", "11:00"],
        datasets: [{
            label: "Request",
            data: datapoints,
            fill: false,
            borderDash: [5, 5],
            borderColor: "#673AB7",
            pointBorderColor: "#673AB7",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }, {
            label: "Response",
            data: datapoints1,
            fill: false,
            borderDash: [5, 5],
            borderColor: "#00BCD4",
            pointBorderColor: "#00BCD4",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }, {
            label: "Wins",
            data: datapoints2,
            borderDash: [5, 5],
            fill: false,
            borderColor: "#FF5722",
            pointBorderColor: "#FF5722",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }]
    };

    var config = {
        type: 'line',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    // var lineChart = new Chart(ctx, config);
    window.lineChart = new Chart(ctx, config);

    function updateSSP() {

        for (var i = 0, len = datapoints.length; i < len; ++i) {
            datapoints[i] = Math.random() * 100 < 0.05 ? NaN : randomScalingFactor();
        }
        for (var j = 0, len1 = datapoints1.length; j < len1; ++j) {
            datapoints1[j] = Math.random() * 100 < 0.05 ? NaN : randomScalingFactor();
        }

        for (var k = 0, len2 = datapoints.length; k < len2; ++k) {
            datapoints2[k] = Math.random() * 100 < 0.05 ? NaN : randomScalingFactor();
        }

        window.lineChart.update();
        setTimeout(updateSSP, 3*1000);

    }
    updateSSP();
});




