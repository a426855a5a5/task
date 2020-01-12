import React,{Component} from 'react';
import './index.css';
import SliderList from "./SliderList";

export default class Slider extends React.Component {
    constructor(){
        super();
        this.state = {index:50}// 表示当前是第几张
    }
    go =(step)=>{ // 去哪  传入要动几个
        const {itemheight = 50} = this.props;
        let index = this.state.index-step;// 先减的
        if(index < -(this.props.items.length * itemheight) + itemheight){ // 当等于最后一张时  越界回到0
            setTimeout(()=>{
                index = itemheight;// 下一次该走50了
                this.setState({index});
            },30)
            return;//因为设置了setTimeout所以要等待setTimeout后再设置最新状态
        }

        this.setState({
            index:index
        })
    }
    turn = () =>{ // 轮播
        const {winNum = 5} = this.props;
        if(this.props.items.length < winNum) return; // 页面加载完成后  看是否需要自动轮播
        this.timer = setInterval(()=>{
            this.go(1)
        },this.props.delay*10);
    }
    componentDidMount(){ // 页面加载完成后  看是否需要自动轮播
        const {itemheight = 50} = this.props;
        this.setState({index: itemheight});
        if(this.props.autoplay){
          this.turn();
        }
    }
    render(){
        const {winNum = 5} = this.props;
        return (
            <div onMouseEnter={()=>{
                clearInterval(this.timer);
            }} onMouseLeave={()=>{
                this.turn();
            }}>
                <SliderList ref='list' index={this.state.index} winNum={winNum} items={this.props.items} />
            </div>
        )
    }
}