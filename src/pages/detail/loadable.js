import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>正在加载</div>
  }
});

// 无状态组件
export default () => <LoadableComponent/>
