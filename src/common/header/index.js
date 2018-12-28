import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators }  from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button,
  SearchWrapper
} from "./style";

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left  active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe62b;
          </i>
          <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>
              换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
          </SearchInfo>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writing">
          <i className="iconfont">&#xe615;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
      <div>
        <button
          onClick={() => {
            console.log(props.focused);
          }}
        >
          按钮
        </button>
        {props.focused ? "下载APP" : "qqq"}
      </div>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    focused: state.getIn(['header','focused'])
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
