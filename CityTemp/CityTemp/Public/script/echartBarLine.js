function showEChart(cityName) {
  // 路径配置
  require.config(
  {
    paths:
    {
      echarts: '../../Public/echarts'
    }
  });
  // 使用
  require(['echarts', 'echarts/chart/bar', 'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
  ], function (ec) {
    // 基于准备好的dom，初始化echarts图表
    var chartLine = ec.init(document.getElementById('line'));

    var option =
    {
      title:
      {
        text: cityName + '3天气温',
        subtext: '真的呦！'
      },
      grid:
      {
        x: 80,
        x2: 80,
        y: 80,
        y2: 50,
        borderWidth: 0
      },
      tooltip:
      {
        trigger: 'axis'
      },
      legend:
      {
        orient: 'vertical',
        x: 'right',
        y: 'top',
        padding: [30, 32, 10, 0],
        data: ['气温']
      },
      toolbox:
      {
        show: true,
        feature:
        {
          magicType:
          {
            show: true,
            type: ['line', 'bar']
          },
        }
      },
      calculable: true,
      xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: time,
        splitLine: { show: false }
      }],
      yAxis: [
      {
        type: 'value',
        axisLabel:
        {
          formatter: '{value} °C'
        },
        splitLine: { show: false }
      }],
      series: [
      {
        name: '气温',
        type: 'line',
        data: temp,
        markPoint:
        {
          data: [
          {
            type: 'max',
            name: '最大值'
          },
          {
            type: 'min',
            name: '最小值'
          }]
        },
        markLine:
        {
          data: [
          {
            type: 'average',
            name: '平均值'
          }]
        }
      }]
    };

    // 为echarts对象加载数据
    chartLine.setOption(option);
  });
}