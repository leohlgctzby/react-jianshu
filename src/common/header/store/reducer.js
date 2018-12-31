import * as constants from './constants';
import { fromJS } from 'immutable';

// 因为最外层包裹着fromJS函数，
// 所以list中的数组从普通的数组，变成immutable类型的数组
// 你想改变数组中的值，action中传递的data的值也需要是immutable类型的
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default :
      return state;
  }
};
