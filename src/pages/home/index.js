import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { BackTop } from './style';

import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
 
class Home extends Component {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4593/fa5490809ff3344c5aa72312aa1e05921be77222.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic/>
          <List/>
          </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
   dispatch(actionCreators.getHomeInfo());
  }
})

export default connect(null, mapDispatch)(Home);