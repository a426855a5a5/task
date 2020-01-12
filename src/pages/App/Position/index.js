import React from 'react';
import './index.css';
import Slider from '../../../components/Slider';

export default class Index extends React.Component {
    render() {
        const href ="javascript:;";
        const items = [
            {time: '1分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '2分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '3分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '4分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '5分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '6分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '7分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '8分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
            {time: '9分钟', city: '杭州,北京,上海', position: '蚂蚁金服-区块链测试开发专家-智能科技', src: href},
        ];
        return (
            <div style={{ height: 364, width: '100%', overflow: 'hidden' }} className="newPosition" data-spm-anchor-id="a2obv.11410899.0.i1.55ef6c61TU4IbZ">
                <div className="newPosition-content" style={{ width: 1180, height: 300, margin: '32px auto' }}>
                    <div className="newPosition-list" style={{ width: 850, height: 300 }}>
                        <div className="more-positon">
                            最新职位
				            <a className="clickMorePosition">更多</a>
                        </div>
                        <Slider
                            delay={2}
                            itemheight={50}
                            winNum={5}
                            autoplay={true}
                            dots={true}
                            arrows={true}
                            items={items}
                        />
                    </div>
                    <div style={{ width: 310, float: 'right' }}>
                        <a
                            className="show-pic pic-1 jumpToAliyun"
                            href={href}
                            style={{ textAlign: 'center', lineHeight: '140px' }}>
                            <img style={{ width: 179, verticalAlign: 'middle' }}
                                src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" />
                        </a>
                        <a
                            className="show-pic pic-2 jumpToEhr"
                            href={href}
                            style={{ textAlign: 'center', lineHeight: '140px' }}>
                            <img style={{ width: 260, verticalAlign: 'middle' }}
                                src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
