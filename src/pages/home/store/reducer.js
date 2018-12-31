import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload-images.jianshu.io/upload_images/2023205-9ec2e0fbff7606f7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '手绘',
    imgUrl: '//upload-images.jianshu.io/upload_images/7152666-fc1a844f5ed70359.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch(action.type){
    default :
      return state;
  }
};
