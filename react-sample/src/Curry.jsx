import React from "react";

/**
 * カリー化について学習してみた。
 * What is カリー化?
 * 複数の引数を取る関数を、より少ない引数を取る関数に分割して入れ子にすること
 * @see https://qiita.com/KtheS/items/1a93ba0a6d722a534439
 * @see https://qiita.com/terry_6518/items/4b39826d9ee76076a0a7
 */
const Curry = () => {
  // case 1. カリー化なし
  const notCurry = (n, m) => {
    return n * m;
  };

  // case 2. カリー化
  const withCurry = (n) => {
    return (m) => n * m;
  };
  // case 3.カリー化（アロー関数）
  const withCurryArrow = (n) => (m) => n * m;

  /**
   * 部分適応
   * カリー化された関数の一部の引数を固定して、新しい関数をつくること。
   */

  // 上記withCurryArrowの一部を利用して新たな関数を作ることができる。
  const triple = withCurryArrow(3);
  // triple(2) → return : 6 1つ目の引数に3が固定されているため、常に3の倍数を返す関数として機能する。
  // 高階関数や部分適応を使うことで、一時的な変数が不要となり、その分コードが簡潔になるという恩恵が得られる！

  // カリー化の別例
  const add = (x, y) => x + y;
  const addWithCurry = (x) => (y) => x + y;
  addWithCurry(1)(2);

  /**
   * ↑上記の例
   * 1.addWithCurryはxを受け取る
   * 2.この瞬間は1に化けるため、addWithCurry(1)は(y) => 1 + y という関数を返す。
   * 3.addWithCurry(1)から帰ってきた関数に(2)というカッコがつくことになるので、ここでyが2に化ける。
   * 4.1+2が計算され、3がreturn
   */

  /**
   * カリー化とは、複数の引数を取る関数を、
   * 引数が元の関数で、戻り値が引数として元の関数の残りの引数を受け取り、
   * それを使って結果を返す関数である高階関数にすること。
   */
  return (
    <>
      <div>notCurry:{notCurry(2, 3)}</div>
      <div>withCurry:{withCurry(3)(5)}</div>
      <div>withCurryArrow:{withCurryArrow(4)(1)}</div>
      <div>triple:{triple(2)}</div>
    </>
  );
};

export default Curry;
