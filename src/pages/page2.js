import React from 'react';
import { Table } from 'antd'
import { request } from '../utils/utils'

class Page2 extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    request({
      url: 'https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists'
    }).then(
      res => {
        console.log(res);
        this.setState({ data: res.data })
      }
    )
  }
  onClick = () => {
    this.props.history.push('/main')
  }
  render() {
    console.log(this.props);
    const column = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '姓名',
        dataIndex: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age'
      },
      {
        title: '性别',
        dataIndex: 'sex'
      },
    ]
    return (
      <div>
        <Table columns={column} dataSource={this.state.data}>

        </Table>
      </div>
    );
  }

}

export default Page2;