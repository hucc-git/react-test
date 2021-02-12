import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link, Route,Switch } from 'react-router-dom';
import styles from './main.less';
import Page1 from '../page1';
import Page2 from '../page2';
import Page3 from '../page3';
import NotFound from '../404';


const { Header, Sider, Content } = Layout;

export default class Main extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider className={styles.sider} trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/main/page1">page1</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/main/page2">page2</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/main/page3">page3</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles['site-layout']}>
          <Header className={styles['site-layout-background']} style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className={styles['site-layout-background']}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/main/page1" component={Page1} exact></Route>
              <Route path="/main/page2" component={Page2} exact></Route>
              <Route path="/main/page3" component={Page3} exact></Route>
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
