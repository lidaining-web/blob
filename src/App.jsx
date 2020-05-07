import React, { useState, useEffect } from 'react';
import 'App.scss';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom';
import Articles from 'components/article/article';
import Center from 'pages/center';
import Texty from 'rc-texty';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

function App() {
  const { Header, Footer, Content } = Layout;
  const [count] = useState(0);
  const bgGround = { 'background': `url(${require("assets/bg1.jpg")}) no-repeat`, 'backgroundSize': '100% 100%' }

  const geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }
  const getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }
  const getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }
  useEffect(() => {

  });
  return (
    <div className="App" style={bgGround}>
      <Layout>
        <Header>
          <div className="Header-content">
            <Row className='header'>
              <Col span={6} className='header-title' style={{ marginTop: 5 }}>
                <div className="combined" style={{ color: '#fff' }}>
                  <div className="combined-shape">
                    <div className="shape-left">
                      <TweenOne
                        animation={[
                          { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                          { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                        ]}
                      />
                    </div>
                    <div className="shape-right">
                      <TweenOne
                        animation={[
                          { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                          { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                        ]}
                      />
                    </div>
                  </div>
                  <Texty
                    className="title"
                    type="mask-top"
                    delay={400}
                    enter={getEnter}
                    interval={geInterval}
                    component={TweenOne}
                    componentProps={{
                      animation: [
                        { x: 130, type: 'set' },
                        { x: 100, delay: 500, duration: 450 },
                        {
                          ease: 'easeOutQuart',
                          duration: 300,
                          x: 0,
                        },
                        {
                          letterSpacing: 0,
                          delay: -300,
                          scale: 0.9,
                          ease: 'easeInOutQuint',
                          duration: 1000,
                        },
                        { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                      ],
                    }}
                  >
                    李代宁的个人博客
                            </Texty>
                  <TweenOne
                    className="combined-bar"
                    animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
                  />
                  <Texty
                    className="content"
                    type="bottom"
                    split={getSplit}
                    delay={2200}
                    interval={30}
                  >
                    Cherish the person in front of you
                            </Texty>
                </div>
              </Col>
            </Row>
          </div>
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
