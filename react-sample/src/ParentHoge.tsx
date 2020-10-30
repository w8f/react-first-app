import React from "react";
import Hoge from "./Hoge";

/**
 * 初めてのTypeScript
 */
const ParentHoge = () => {
  return (
    // 定義されたpropsの型に合わない場合、エディタでエラーが出る。
    <Hoge
      content={"このpropsは文字列であるべき"}
      title={"タイトルです"}
      a={1}
    />
  );
};

export default ParentHoge;
