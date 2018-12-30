import * as constants from './constants';
import { fromJS } from 'immutable';

// 因为最外层包裹着fromJS函数，
// 所以list中的数组从普通的数组，变成immutable类型的数组
// 你想改变数组中的值，action中传递的data的值也需要是immutable类型的
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data);
  }
  return state;
};
