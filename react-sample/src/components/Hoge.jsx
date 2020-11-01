import React from "react";
import Button from "./Button";

export default class Hoge extends React.Component {
  render() {
    // インラインスタイル
    // 非推奨・・！
    const style = {
      color: "blue",
    };
    return (
      <>
        <h2 style={style}>Hogee</h2>
        <Button />
      </>
    );
  }
}
