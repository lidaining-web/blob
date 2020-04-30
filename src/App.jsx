import React, { useState, useEffect } from 'react';
import 'App.scss';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom';
import Articles from 'components/article/article';
import Center from 'pages/center';

function App() {
  const { Header, Footer, Content } = Layout;
  const [count] = useState(0);
  useEffect(() => {

  });
  return (
    <div className="App">
      <Layout>
        <Header>
          <div className="Header-content">
            李代宁的个人博客
          </div>
        </Header>
        <Content>
          <div className="Conent-main">
            <Row justify="center" align="top">
              <Col span={12}>
                {count ? <Route exact path="/" component={Articles} /> : <div className="noData">敬请期待</div>}
              </Col>
              <Col span={4} offset={1}>
                <Route exact path="/" component={Center} />
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
