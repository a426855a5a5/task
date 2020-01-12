import React,{Component} from 'react';
import './index.css';
export default class MessageBox extends React.Component {
    render(){
        const { items = [] } = this.props;
        let style={
            top: this.props.index+'px', // 设置ul默认高度
        }
        return (
            <ul style={style} className='position-list' ref='ul'>
                {items.map((item,index)=>(
                    <li className="scroll-1" key={item.time}>
                        <a href={item.src} className="position" >{item.position}</a>
                        <em className="time">{item.time}</em>
                        <em className="city" title={item.city}>{item.city}</em>
                    </li>
                ))}
                {/*实现无缝轮播要再增加一张图*/}

                {items.length >= this.props.winNum && items.map((item,index)=>(
                    index < this.props.winNum && <li className="scroll-1"  key={`${item.time}${index}`}>
                        <a href={item.src} className="position" >{item.position}</a>
                        <em className="time">{item.time}</em>
                        <em className="city" title={item.city}>{item.city}</em>
                    </li>
                ))}
            </ul>
        )
    }
}
