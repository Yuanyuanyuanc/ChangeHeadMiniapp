/* eslint-disable taro/this-props-function */
/* eslint-disable jsx-quotes */
/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { appendImageUrl, removeImageUrl, clearImageList } from '../../actions/yuan_head_image_list'

import './index.scss'

@connect(({ headList }) => ({
  headList
}), (dispatch) => ({
  diapatchAppend(url) {
    dispatch(appendImageUrl(url))
  },
  remove(url) {
    dispatch(removeImageUrl(url))
  },
  clear() {
    dispatch(clearImageList())
  }
}))

class Head extends Component {
  
  onRead(url) {
    console.log('read: ', url)
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const imageList = Array(28).fill('').map((item, index) => require(`../../assets/images/Christmas-${index + 1}.jpg`))
    return (
      <View className="list">
        {imageList.map((item, index) => 
            // <Image className="list-image" src={item} key={index} mode="widthFix" onClick={this.props.diapatchAppend(item)} />)
            <Image className="list-image" src={item} key={index} mode="widthFix" onTap={this.onRead(item)} />)
        }
      </View>
    )
  }
}

export default Head
