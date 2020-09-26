import React from 'react';
// import logo from './logo.svg';
import '../test.less';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component {
  onClick = () =>{
    this.props.history.push('/main/page1')
  }
  render() {
    console.log(this.props)
    return (
      <div className="sty">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
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
            <Button type="primary" htmlType="submit" onClick={this.onClick}>
              Submit
        </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

}

export default Login;
