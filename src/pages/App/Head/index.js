import React from 'react';
import './index.css';

export default class Index extends React.Component {
    render() {
        return (
            <div className="head">
                <div className="head-main">
                    <div className="head-menu">
                        <a href="javascript:;" className="logo" style={{ textAlign: 'right', width: 125 }}>
                            <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt="" />
                        </a>
                        <i className='i'>|</i>
                        <i className='i2'>社招官网</i>
                        <ul className="" id="menu">
                            <li className="current current-cat" value="1"><a href="javascript:;">首 &nbsp;&nbsp;页</a></li>
                            <li><a href="javascript:;">社会招聘</a></li>
                            <li><a href="javascript:;">校园招聘</a></li>
                            <li><a href="javascript:;">了解阿里</a></li>
                            <li><a href="javascript:;">个人中心</a></li>
                            <div className="login" style={{ opacity: .8 }}>
                                欢迎来到阿里巴巴集团招聘！
                                <a href="javascript:;" target="_top">登录</a> | <a href="javascript:;">注册</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
