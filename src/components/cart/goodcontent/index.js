import React, { Component } from 'react'
import {GoodContentCom} from './styled'

export default class GoodContent extends Component {
  render() {
    return (
      <GoodContentCom>
        <div className='good-img'>
            <img src="https://goods6.juancdn.com/goods/190318/b/4/5c8f0e50b6f8ea3acd11fb53_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" />
        </div>
        <div className='good-contents'>
            <div className="good-top">
                <div className='good-name'>
                    <p>她图时尚连帽女士外套</p>
                </div>
                <div className='good-sty'>
                    <p>榛粉色 S</p>
                </div>
            </div>
            
            <div className='good-price'>
                <p>
                    <span>¥99</span>
                    <span><del>¥659</del></span>
                </p>
                <p className='num'>
                    <span>X1</span>
                </p>
            </div>
        </div>
      </GoodContentCom>
    )
  }
}
