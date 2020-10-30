import React from "react";

/**
 * 型を定義する。
 * 〇〇：型名
 */
interface ArticleProps {
  content: string;
  title: string;
  a: number;
  b?: number | null; // ?はundefinedかもしれないとき。 | null はnullable
}

// boolean
// string
// number
let a: boolean = true;
let b: string = "hoge";
let c: number = 2;

// anyは基本使わない。
// void 戻り値なし
// Arrayは[]を後ろにつける。
const d = (a: number[], b: boolean): number[] => {
  return a;
};

/**
 * Hogeコンポーネント
 * 初めてのTypeScript
 * @param {ArticleProps} props
 */
const Hoge = (props: ArticleProps) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </article>
  );
};

export default Hoge;
