import React from "react";
import Article from "./Article";
import FizzBuzz from "./FizzBuzz";
import Curry from "./Curry";
// 名前付きimport
import { Foo, Bar } from "./components/FooBar";
// 名前無し
import Hoge from "./components/Hoge";
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
      count: 0,
    };
  }

  /**
   * Reactのライフサイクル
   * ↓mounting コンポーネントが配置される（生まれる）期間
   * ↓updating コンポーネントが返納される（成長する）期間
   * ↓unmounting コンポーネントが破壊される（死ぬ）期間
   *
   * ※なぜライフサイクルを使う？
   * ・関数の外に影響を与える関数を記述するため。
   * ※DOM変更、API通信、ログ出力、setState()...etc
   * ・副作用＝適切な場所に配置すべき処理
   *
   * 主要メソッド（Mount）
   * 最初から使いたいものとか。。定義仕様。
   * ・constructor() 初期化（stateなど）
   * ・render() VDOMを描画（JSXをリターン）
   * ・componentDidMount() render()あとに一度だけ呼ばれる リスナーの設定やAPI通信に使われる。
   *
   * 主要メソッド（Update）
   * ・render() VDOMを再描画
   * ・componentDidUpdate 再render()後に呼ばれる スクロールイベントや条件付きイベント。
   *
   * 主要メソッド（Unmount）
   * ・componentWillUnmount() コンポーネントが破棄される直前 リソースを開放するため。リスナーの解除など。
   */

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

  countUp = () => {
    // this.setState({ state: { count: this.state.count + 1 } });
    this.setState({ count: this.state.count + 1 });
  };

  //mount時に使えるメソッド
  componentDidMount() {
    // クリックでいいね数up!!
    document.getElementById("counter").addEventListener("click", this.countUp);
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({ count: 0 });
    }
  }

  componentWillUnmount() {
    document
      .getElementById("counter")
      .removeEventListener("click", this.countUp);
  }

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
          count={this.state.count}
        />
        <FizzBuzz />
        <Curry />
        <Foo />
        <Bar />
        <Hoge />
      </>

      // <React.Fragment>
      //   <Article />
      // </React.Fragment>
    );
  }
}

export default Blog;
