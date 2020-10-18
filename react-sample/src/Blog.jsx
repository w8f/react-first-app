import React from "react";
import Article from "./Article";

// class component
class Blog extends React.Component {
  constructor(props) {
    super(props);
    /**
     * stateとは
     * 1,コンポーネント内で管理する変数
     * 2,ローカルステートと呼ばれる。
     * 3,propsとして子コンポーネントに渡せる。
     */

    /**
     * ★Stateの設定方法
     * constructor()内で宣言
     * オブジェクト型で記述
     * Stateの中身が変わると、再度レンダリングされる。
     */
    this.state = {
      isPublished: false,
    };
  }

  /**
   * ★stateの変更方法
   * setState()を使う
   * 関数にラップするのが一般的
   * setState()内に記述されたstateのみを変更。
   */

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  render() {
    const authorName = "hayakawa";
    return (
      // <>は<React.Fragment>の省略形
      <>
        <Article
          title={"Reactの使い方"}
          order={3}
          /**
           * ★Stateの取得
           * 同コンポーネント内なら,this.state.key名で取得
           * 子コンポーネントで参照したい場合は、propsで渡す。
           */
          isPublished={this.state.isPublished}
          author={authorName}
          toggle={() => this.togglePublished()}
        />
      </>

      // <React.Fragment>
      //   <Article />
      // </React.Fragment>
    );
  }
}

export default Blog;
