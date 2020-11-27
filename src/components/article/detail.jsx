import React, {useState,useEffect} from 'react';
import { getArticleById } from 'api/index'
import { withRouter } from 'react-router-dom'
import { Spin } from 'antd';
function Detail(props) {
  const _id = props.match.params._id
  const [content, setContent] = useState('');
  useEffect(() => {
    const api = async () => {
      const c = await getArticleById({_id: _id})
      if (c.code) {
        setContent(c.data.content)
      } else {
        setContent('暂无数据')
      }
    }
    api()
  }, [_id])
  return (
    <div style={{ 'color': 'white' }}>
      {
        !content 
          ? 
        <div className="loading"><Spin tip="Loading..." size='large'/></div>
          : 
        <div dangerouslySetInnerHTML={ {__html:content} }></div>
      }
      
    </div>
  );
}

export default withRouter(Detail);
