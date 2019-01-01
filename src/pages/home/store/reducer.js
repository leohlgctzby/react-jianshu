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
  }],
  articleList: [{
    id: 1,
    title: '他只活了30年，却是300多年来中国最深情的男人',
    desc: '文/麦大人 01 不是人间富贵花 1780年，宠臣和珅把《红楼梦》进呈给乾隆皇帝。 乾隆御览完后，感慨地说了一句话：“这是为明珠的家事所作啊。”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2259045-97529224824d9b3f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  },{
    id: 2,
    title: '他只活了30年，却是300多年来中国最深情的男人',
    desc: '文/麦大人 01 不是人间富贵花 1780年，宠臣和珅把《红楼梦》进呈给乾隆皇帝。 乾隆御览完后，感慨地说了一句话：“这是为明珠的家事所作啊。”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2259045-97529224824d9b3f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  },{
    id: 3,
    title: '他只活了30年，却是300多年来中国最深情的男人',
    desc: '文/麦大人 01 不是人间富贵花 1780年，宠臣和珅把《红楼梦》进呈给乾隆皇帝。 乾隆御览完后，感慨地说了一句话：“这是为明珠的家事所作啊。”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2259045-97529224824d9b3f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  },{
    id: 4,
    title: '他只活了30年，却是300多年来中国最深情的男人',
    desc: '文/麦大人 01 不是人间富贵花 1780年，宠臣和珅把《红楼梦》进呈给乾隆皇帝。 乾隆御览完后，感慨地说了一句话：“这是为明珠的家事所作啊。”...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2259045-97529224824d9b3f?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  }]
});

export default (state = defaultState, action) => {
  switch(action.type){
    default :
      return state;
  }
};
