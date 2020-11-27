import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getList } from 'api/index'
import { Row, Col, Spin, Divider } from 'antd';
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
          <Row key={el._id}>
            <Col span={24}>
              <Link to="/detail/5f3e2a175e3cab9fbe7d9925">
              <Divider plain='true' orientation="left"><span style={{ 'color': 'white' }}>{el.title}</span></Divider>
              </Link>
            </Col>
            <Col span={24}>
              时间：{el.createTime.slice(0,10)}
              <Divider type="vertical" />
              阅读：{el.viewCount}
            </Col>
          </Row>
        ) 
      }
    </div>
  );
}

export default Articles;
