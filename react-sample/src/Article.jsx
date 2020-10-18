import React from "react";

// Functional Compornent
// stateを持たない。
// こっちの書き方の方が推奨されている（らしい）
const Article = (props) => {
  let publishState = "";
  if (props.isPublished) {
    publishState = "公開";
  } else {
    publishState = "非公開";
  }
  return (
    <div>
      {/* <h2>Reactコンポーネントの使い方</h2> */}
      {/* propsをjsxで使うとき */}
      {/* 文字列、数値、真偽値、配列、オブジェクト、変数などなんでも渡せる。 */}
      {/* 文字列は｛｝で囲まなくてもOK */}
      <h2>{props.title}</h2>
      <p>順番：{props.order}です</p>
      <p>著者：{props.author}です</p>
      <label htmlFor="check">公開状態：</label>
      <input
        id="check"
        type="checkbox"
        checked={props.isPublished}
        onClick={() => props.toggle()}
      ></input>
      <p>{publishState}</p>
    </div>
  );
};

export default Article;
