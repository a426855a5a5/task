import React from 'react';
import './index.css';

export default class Index extends React.Component {
    render() {
        const arr = [
            {url:'javascript:;',text: 'JAVA'},
            {url:'javascript:;',text: 'IOS'},
            {url:'javascript:;',text: '数据'},
            {url:'javascript:;',text: '安全'},
            {url:'javascript:;',text: '搜索'},
            {url:'javascript:;',text: '算法'},
            {url:'javascript:;',text: '运营'},
            {url:'javascript:;',text: '视觉'},
            {url:'javascript:;',text: '交互'},
            {url:'javascript:;',text: '前端'}];
        return (
            <div className="index-main" id="J-index-main" style={{position:'relative',height:478}}>
                <img className="index-image" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" style={{verticalAlign: 'middle', width: 1440, height: 478}} alt="" />
                <div style={{position: 'absolute',top:0,left:0,width: '100%',height: '100%',background:' rgba(31,56,88,0.40)'}}></div>
                 <div className="index-mid-box" style={{height:'100%'}}>
                   <form className="J-search-form">
                         <div className="float-mid" style={{top: '50%',marginLeft: -245,marginTop: -145}}>
                            <p style={{fontSize: 54,color: '#fff',lineHeight: '56px'}} className="en-world">If not now, when?</p>
                            <p style={{fontSize: 54,color: '#fff',lineHeight: '56px'}} className="en-world">If not me, who?</p>
                            <p style={{fontSize: 34,color: '#fff',marginBottom:38,lineHeight: '56px'}}>此时此刻，非我莫属！</p>
                            <div className="search-box" style={{width:490,height:60,position: 'relative',border:0,background:'none',margin:'0 auto'}}>
                                <span id="08248906579708914_span" className="search-topic" style={{left: 15}}>请输入职位关键词</span>
                                <div style={{width:'100%',height:'100%',background:'#fff',position:'absolute',opacity: '0.1', filter:'alpha(opacity=10)'}}></div>
                                <input 
                                    type="text"
                                    maxLength="30" 
                                    topic="请输入职位关键词" 
                                    style={{width:368,height:40,paddingTop: 6,marginTop:6,marginLeft:10,boxSizing: 'border-box',borderRadius:3}} className="search-text" id="08248906579708914" />
                                <input 
                                    className="search-btn" 
                                    // data-spm-click="gostr=/hr;locaid=searchPosition" 
                                    type="submit" 
                                    style={{color:'#fff',background:'#F37327',fontSize:14,fontFamily:'PingFangSC-Regular',width: 92,height: 40,borderRadius:3,marginTop:10,marginLeft:10,position: 'relative',zIndex:2}} value="搜索" />
                            </div>
                            <div className="hot-text" style={{textAlign:'center'}}>
                                热门搜索：
                                {arr.map(item=>{
                                    return <a className="search-key" href={item.url} data-spm-click="gostr=/hr;locaid=hotPosition">{item.text}</a>
                                })}
                            </div>
                        </div> 
                    </form>
                    
                </div>
            </div>
                        )
                    }
                }
