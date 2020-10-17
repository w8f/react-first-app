import React from "react";
import Article from "./Article";

// class component
class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "hayakawa";
    return (
      // <>は<React.Fragment>の省略形
      <>
        <Article
          title={"Reactの使い方"}
          order={3}
          isPublished={true}
          author={authorName}
        />
      </>

      // <React.Fragment>
      //   <Article />
      // </React.Fragment>
    );
  }
}

export default Blog;
