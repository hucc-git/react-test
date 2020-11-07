import React from 'react';
// import logo from './logo.svg';
import styles from './main.less';
import { Form, Input, Button, Checkbox,message } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component {
  onClick = (values) => {
    const {username,password}=values;
    if(username!=='admin'||password!=='1' ){
      return message.error('用户名或密码错误');
    }
    this.props.history.push('/main/page1')
  }
  reverse = () =>{
    let str = 'hello';
    let temp = '';
    for(let i=str.length-1;i>=0;i--){
      temp=temp+str[i];
    }
    console.log(temp)
    // console.log(str.split('').reverse().join(''));
  }
  render() {
    this.reverse()
    return (
      <div className={styles.container}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onClick}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>
      </div>
    );
  }

}

export default Login;
