var humidityGauge = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Humidity'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '%'
        },
        plotBands: [{
            from: 0,
            to: 15,
            color: '#DF5353' // green
        }, {
            from: 15,
            to: 85,
            color: '#55BF3B' // yellow
        }, {
            from: 85,
            to: 100,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Humidity',
        data: [0],
        tooltip: {
            valueSuffix: ' %'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }

};

var temperatureGauge = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Temperature'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: -50,
        max: 50,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '℃'
        },
        plotBands: [{
            from: -50,
            to: 0,
            color: '#80a2ff' // green
        }, {
            from: 0,
            to: 50,
            color: '#dfcd00' // yellow
        }]
    },

    series: [{
        name: 'Temperature',
        data: [0],
        tooltip: {
            valueSuffix: '℃'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }

};

var vocGauge = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'VOC'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 7,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'ppm'
        },
        plotBands: [{
            from: 0,
            to: 0.3,
            color: '#26b9d9' // green
        }, {
            from: 0.3,
            to: 1,
            color: '#5ed2a1' // yellow
        }, {
            from: 1,
            to: 2.5,
            color: '#edb91e' // yellow
        }, {
            from: 2.5,
            to: 5.5,
            color: '#ed622c' // yellow
        }, {
            from: 5.5,
            to: 7,
            color: '#ed2247' // yellow
        }]
    },

    series: [{
        name: 'VOC',
        data: [0],
        tooltip: {
            valueSuffix: 'ppm'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }

};

var pm1Gauge = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'PM 1'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'μg/m<sup>3</sup>'
        },
        plotBands: [{
            from: 0,
            to: 14,
            color: '#26b9d9' // green
        }, {
            from: 14,
            to: 34,
            color: '#5ed2a1' // yellow
        }, {
            from: 34,
            to: 61,
            color: '#edb91e' // yellow
        }, {
            from: 61,
            to: 95,
            color: '#ed622c' // yellow
        }, {
            from: 95,
            to: 100,
            color: '#ed2247' // yellow
        }]
    },

    series: [{
        name: 'PM 1',
        data: [0],
        tooltip: {
            valueSuffix: ' μg/m<sup>3</sup>'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }

};

var pm25Gauge = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'PM 2.5'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 170,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'μg/m<sup>3</sup>'
        },
        plotBands: [{
            from: 0,
            to: 20,
            color: '#26b9d9' // green
        }, {
            from: 20,
            to: 50,
            color: '#5ed2a1' // yellow
        }, {
            from: 50,
            to: 90,
            color: '#edb91e' // yellow
        }, {
            from: 90,
            to: 140,
            color: '#ed622c' // yellow
        }, {
            from: 140,
            to: 170,
            color: '#ed2247' // yellow
        }]
    },

    series: [{
        name: 'PM 2.5',
        data: [0],
        tooltip: {
            valueSuffix: ' μg/m<sup>3</sup>'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }

};

var pm10Gauge = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'PM 10'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 250,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'μg/m<sup>3</sup>'
        },
        plotBands: [{
            from: 0,
            to: 30,
            color: '#26b9d9' // green
        }, {
            from: 30,
            to: 75,
            color: '#5ed2a1' // yellow
        }, {
            from: 75,
            to: 125,
            color: '#edb91e' // yellow
        }, {
            from: 125,
            to: 200,
            color: '#ed622c' // yellow
        }, {
            from: 200,
            to: 250,
            color: '#ed2247' // yellow
        }]
    },

    series: [{
        name: 'PM 10',
        data: [0],
        tooltip: {
            valueSuffix: ' μg/m<sup>3</sup>'
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }

};

var graphF = function (mac) {
    return {

        chart: {
            type: 'spline',
            zoomType: 'x'
        },

        data: {
            csvURL: 'http://localhost:3000/data?mac=' + mac,
            beforeParse: function (csv) {
                return csv.replace(/\n\n/g, '\n');
            }
        },

        title: {
            text: 'PM'
        },

        legend: {
            align: 'left',
            verticalAlign: 'top',
            borderWidth: 0
        },

        xAxis: {},

        tooltip: {
            shared: true,
            crosshairs: true
        },

        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    };
};

$(function () {
    var socket = io();
    var indicatorsHumidity = {};
    var indicatorsTemperature = {};
    var indicatorsVOC = {};
    var indicatorsPM1 = {};
    var indicatorsPM25 = {};
    var indicatorsPM10 = {};
    var graphs = {};
    var titles = {};
    socket.on('atmotube_data', function (data) {
        // $('#messages').append($('<li>').text(JSON.stringify(data)));
        var indicators = document.getElementById("indicators");
        for (var mac in data) {
            var indicator = document.getElementById(mac);
            var name = mac;
            if (!indicator) {
                var nodeMAC = document.createElement("h2");
                nodeMAC.textContent = name + ' (' + data[mac].timestamp + ')';
                titles[mac] = nodeMAC;
                indicators.appendChild(nodeMAC);

                var node = document.createElement("div");
                node.setAttribute("id", mac);

                var gaugeVOC = document.createElement("div");
                gaugeVOC.setAttribute("id", "voc_gauge" + mac);
                gaugeVOC.setAttribute("class", "gauge");
                node.appendChild(gaugeVOC);

                var gaugePM1 = document.createElement("div");
                gaugePM1.setAttribute("id", "pm1_gauge" + mac);
                gaugePM1.setAttribute("class", "gauge");
                node.appendChild(gaugePM1);

                var gaugePM25 = document.createElement("div");
                gaugePM25.setAttribute("id", "pm25_gauge" + mac);
                gaugePM25.setAttribute("class", "gauge");
                node.appendChild(gaugePM25);

                var gaugePM10 = document.createElement("div");
                gaugePM10.setAttribute("id", "pm10_gauge" + mac);
                gaugePM10.setAttribute("class", "gauge");
                node.appendChild(gaugePM10);

                var gaugeH = document.createElement("div");
                gaugeH.setAttribute("id", "h_gauge" + mac);
                gaugeH.setAttribute("class", "gauge");
                node.appendChild(gaugeH);

                var gaugeT = document.createElement("div");
                gaugeT.setAttribute("id", "t_gauge" + mac);
                gaugeT.setAttribute("class", "gauge");
                node.appendChild(gaugeT);

                indicators.appendChild(node);

                var graph = document.createElement("div");
                graph.setAttribute("id", "graph" + mac);

                indicators.appendChild(graph);

                Highcharts.chart("voc_gauge" + mac, vocGauge, function (chart) {
                    var point = chart.series[0].points[0];
                    point.update(data[mac].voc);
                    indicatorsVOC[mac] = point;
                });
                Highcharts.chart("pm1_gauge" + mac, pm1Gauge, function (chart) {
                    var point = chart.series[0].points[0];
                    point.update(data[mac].pm1);
                    indicatorsPM1[mac] = point;
                });
                Highcharts.chart("pm25_gauge" + mac, pm25Gauge, function (chart) {
                    var point = chart.series[0].points[0];
                    point.update(data[mac].pm25);
                    indicatorsPM25[mac] = point;
                });
                Highcharts.chart("pm10_gauge" + mac, pm10Gauge, function (chart) {
                    var point = chart.series[0].points[0];
                    point.update(data[mac].pm10);
                    indicatorsPM10[mac] = point;
                });
                Highcharts.chart("h_gauge" + mac, humidityGauge, function (chart) {
                    var point = chart.series[0].points[0];
                    point.update(data[mac].humidity);
                    indicatorsHumidity[mac] = point;
                });
                Highcharts.chart("t_gauge" + mac, temperatureGauge, function (chart) {
                    var point = chart.series[0].points[0];
                    point.update(data[mac].temperature);
                    indicatorsTemperature[mac] = point;
                });
                Highcharts.chart("graph" + mac, graphF(mac), function (chart) {
                    graphs[mac] = chart.series;
                });
            } else {
                indicatorsVOC[mac].update(data[mac].voc);
                indicatorsPM1[mac].update(data[mac].pm1);
                indicatorsPM25[mac].update(data[mac].pm25);
                indicatorsPM10[mac].update(data[mac].pm10);
                indicatorsHumidity[mac].update(data[mac].humidity);
                indicatorsTemperature[mac].update(data[mac].temperature);
                titles[mac].textContent = name + ' (' + data[mac].timestamp + ')';
            }
        }
    });
});