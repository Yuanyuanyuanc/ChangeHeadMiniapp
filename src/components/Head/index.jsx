/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './index.scss'


class Head extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='head'>
          
      </View>
    )
  }
}

export default Head
