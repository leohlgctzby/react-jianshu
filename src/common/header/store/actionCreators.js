import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});


export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});


// 组件中异步获取数据的逻辑都拆分到了actionCreators里
// 要求actionCreators返回的对象不是普通的js对象了，而是一个函数
// 为了能返回一个函数，必须要使用redux—thunk这个中间件
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
      console.log(res.data)
    }).catch(() => {
      console.log('error');
    })
  }
}