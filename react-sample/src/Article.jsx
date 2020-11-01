import React, { useState } from "react";
import LikeButton from "./LikeButton";

// Functional Compornent
// stateを持たない。
// こっちの書き方の方が推奨されている（らしい）
const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);
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
        // checkedの場合、ブラウザ上でエラーが発生。↓エラー文
        // You provided a `checked` prop to a form field without an `onChange` handler.
        // This will render a read-only field. If the field should be mutable use `defaultChecked`.
        // Otherwise, set either `onChange` or `readOnly`.
        defaultChecked={isPublished}
        onClick={() => togglePublished(!isPublished)}
      ></input>
      <p>{publishState}</p>
      <LikeButton />
    </div>
  );
};

export default Article;
