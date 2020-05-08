import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import { Route } from 'react-router-dom';
import Articles from 'components/article/article';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Center from 'pages/center';
import QueueAnim from 'rc-queue-anim';
import './app.scss';

function App() {
  const { Content } = Layout;
  const [count] = useState(0);
  const bgGround = { 'background': `url(${require("assets/bg1.jpg")}) no-repeat`, 'backgroundSize': '100% 100%' }
  useEffect(() => {

  });
  return (
    <div className="App" style={bgGround}>
      <Layout style={{ 'minHeight': '100vh', 'background': 'none' }}>
        <Header />
        <Content>
          <div className="Conent-main" style={{ 'padding': '20px 0' }}>
            <Row justify="center" align="top">
              <Col span={12}>
                {count ? <Route exact path="/" component={Articles} /> : <div className="noData" style={{ 'textAlign': 'center' }}>敬请期待</div>}
              </Col>
              <Col span={4} offset={1}>
                <QueueAnim>
                  <Route key="1" exact path="/" component={Center} />
                </QueueAnim>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
