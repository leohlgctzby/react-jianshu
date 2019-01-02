import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, page } = this.props;
    return (
      <div>
        {articleList.map((item,index) => (
          <Link key={index} to='/detail'>
          <ListItem >
            <img className="pic" src={item.get("imgUrl")} alt="" />
            <ListInfo>
              <h3 className="title">{item.get("title")}</h3>
              <p className="desc">{item.get("desc")}</p>
            </ListInfo>
          </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    );
  }
}

const mapState = state => ({
  // articleList: state.get('home').get('articleList')
  articleList: state.getIn(["home", "articleList"]),
  page: state.getIn(['home','articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(
  mapState,
  mapDispatch
)(List);
