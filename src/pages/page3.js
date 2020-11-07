import React from 'react';
import echarts from 'echarts'
class Page3 extends React.PureComponent {
  state = {
    data: []
  }
  componentDidMount() {
    console.log(this.props)
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  onClick = () => {
    this.props.history.push('/main')
  }
  render() {
    return (
      <div id="main" style={{width:400,height:400}}>
        1111
      </div>
    );
  }

}

export default Page3;