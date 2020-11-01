import React from "react";
import styled from "styled-components";

const PrimaryButton = (props) => {
  // 青いボタン
  return <Button id="hoge">hogehoge</Button>;
};

/**
 * CSS in JSでの書き方
 * JSX > Styled-Componentsの順のほうが良さそう
 * 【特徴】
 * ・ローカルスコープで書ける
 *
 */
const Button = styled.button({
  backgroundColor: "#42a5f5",
  border: "none",
  display: "block",
  padding: "4px 16px",
  "&:hover": {
    backgroundColor: "80d6ff",
  },
});

export default PrimaryButton;
