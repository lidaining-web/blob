import React, { useState } from 'react';
import { Row, Card, Tooltip } from 'antd';
import { GithubOutlined, WechatOutlined } from '@ant-design/icons';
import { TimesFun, getOsInfo } from 'utils';
// import { sendSysInfo } from 'api/index'
// import { Link } from 'react-router-dom';
import 'pages/center.scss';
// axios.get('/cityjson').then(res => {
//   console.log(JSON.parse(res.match("\\{(.+?)\\}")[0]))
// }).catch(err => { console.log(err) })
// sendSysInfo({ userAgent: getOsInfo().userAgent }).then(res => {
  
// }).catch(err => { console.log(err) })
getOsInfo()
const { Meta } = Card;
function Center(props) {
  const [sysTime, setTime] = useState(TimesFun('2020-11-27 00:00:00'));
  setInterval(() => { setTime(TimesFun('2020-11-27 00:00:00')) }, 1000)
  const issues = localStorage.getItem('count') || 0;

  return (
    <Row>
      <Card bordered={false} hoverable={true} className="card" cover={<img alt="bg" src={require('assets/headbg.jpg')} />}>
        <div className="authorImg">
          <img src={require('assets/head.jpg')} alt="github" />
        </div>
        <Meta
          title={
            <div>
              <span className="card-title">lidaining-web</span>
            </div>
          }
          description={
            <div>
              <p className="abstract">千万别成为大多数人</p>
              <p className="abstract">
                <span>文章 - {issues}</span>
              </p>
              <p className="abstract">博客已上线：{sysTime}</p>
            </div>
          }
        />
      </Card>
      <Card title="FOLLOW ME" bordered={false} hoverable={true} className="card">
        <div className="icon-git-wrp">
          <Tooltip title="github">
            <GithubOutlined style={{ fontSize: 30 }} onClick={() => window.open('https://github.com/lidaining-web')} />
          </Tooltip>
          <Tooltip
            title={
              <img
                className="wx"
                src={require('assets/wx.jpg')}
                alt="微信"
                width={100}
                height={100}
              />
            }>
            <WechatOutlined style={{ fontSize: 30 }} />
          </Tooltip>
        </div>
      </Card>
    </Row>
  );
}

export default Center;
