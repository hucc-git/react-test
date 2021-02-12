import React, { useEffect, useState } from 'react';
import { Table } from 'antd'
import { request } from '../utils/utils'

function Page2(props) {
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
  const [data, setData] = useState([]);
  useEffect(() => {
    request({
      url: 'https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists'
    }).then(
      res => {
        console.log(res);
        setData(res.data)
      }
    )
  }, [])
  return <Table columns={column} rowKey="id" dataSource={data} />
}

export default Page2;