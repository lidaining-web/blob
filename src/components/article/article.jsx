import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getList } from 'api/index'
import { Row, Col, Spin, Divider } from 'antd';
import './index.scss';
function Articles(props) {
  console.log(props)
  const [content, setContent] = useState([]);
  useEffect(() => {
    const api = async () => {
      const c = await getList({})
      localStorage.setItem('count', c.list.length)
      setContent(c.list)
    }
    api()
  }, [])
  return (
    <div className="Articles-main" style={{ 'color': 'white' }}>
      {
        !content.length 
          ?
        <div className="loading"><Spin tip="Loading..." size='large'/></div>
          :
        content.map((el) => 
          <Row className="acticleListItem" key={el._id}>
            <Col span={24}>
              <Divider plain='true' orientation="left"><span style={{ 'color': 'white' }}>{el.title}</span></Divider>
              <div className="center-content" style={{"WebkitBoxOrient": "vertical"}} dangerouslySetInnerHTML={ {__html:el.content} }></div>
            </Col>
            <Col span={24}>
              时间：{el.createTime.slice(0,10)}
              <Divider type="vertical" />
              阅读：{el.viewCount}
              <Link className="toDetail" to={`/detail/${el._id}`}>查看全文</Link>
            </Col>
          </Row>
        ) 
      }
    </div>
  );
}

export default Articles;
