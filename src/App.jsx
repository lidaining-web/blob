import React, { useState, useEffect } from 'react';
import 'App.scss';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom';
import Articles from 'components/article/article';
import Head from 'components/Header';
import Center from 'pages/center';
import QueueAnim from 'rc-queue-anim';


function App() {
  const { Header, Footer, Content } = Layout;
  const [count] = useState(0);
  const bgGround = { 'background': `url(${require("assets/bg1.jpg")}) no-repeat`, 'backgroundSize': '100% 100%' }
  useEffect(() => {

  });
  return (
    <div className="App" style={bgGround}>
      <Layout>
        <Header>
          <Head />
        </Header>
        <Content>
          <div className="Conent-main">
            <Row justify="center" align="top">
              <Col span={12}>
                {count ? <Route exact path="/" component={Articles} /> : <div className="noData">敬请期待</div>}
              </Col>
              <Col span={4} offset={1}>
                <QueueAnim>
                  <Route key="1" exact path="/" component={Center} />
                </QueueAnim>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer>
          <div className="Footer-content">
            Created ©2020 李代宁 浙ICP备20010308号
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
