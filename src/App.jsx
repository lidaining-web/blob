import React, { useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import { Route } from 'react-router-dom';
import Detail from 'components/article/detail';
import Articles from 'components/article/article';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Center from 'pages/center';
import QueueAnim from 'rc-queue-anim';
import 'App.scss';

function App() {
  const { Content } = Layout;
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
                <Route exact path="/" component={Articles}/>
                <Route exact path="/detail/:_id" component={Detail} />
              </Col>
              <Col span={4} offset={1}>
                <QueueAnim>
                  {/* <Route key="1" exact path="/" component={Center} /> */}
                  <Center count="1"/>
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
