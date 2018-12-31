import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className="topic-pic"
            src="//upload-images.jianshu.io/upload_images/2023205-9ec2e0fbff7606f7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            alt=""
          />
          社会热点
        </TopicItem>
      </TopicWrapper>
    );
  }
}

export default Topic;
