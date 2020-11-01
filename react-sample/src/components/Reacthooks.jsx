/**
 * フック(hook)とは
 * ・クラスの機能（stateやライフサイクル）をFunctional Componentでも使える
 * ・React16.8 から導入
 * ・100％後方互換 -> 小さく導入できる
 */

/**
 * なぜフックを使うのか？
 * A.シンプルさを保つため。
 * クラスコンポーネントは難しい。
 * 1. this という悪魔
 * 2. stateを扱うロジックが複雑
 * 3. 複数のライフサイクルメソッド似副作用のある処理がまたがる。
 */

/**
 * Stateを使う方法　→　useState()を使おう！！
 * ・ステートフックと呼ばれる。
 * ・クラスコンポーネントでいうthis.stateとthis.setState()を代替
 * ・複数のstateを扱うときはstate毎に宣言
 */

/**
 * 関数コンポーネントでライフサイクルを扱う方法　→　useEffect()を使おう！
 * ・ライフサイクルメソッドを代替できる
 * ・Functional Componentでライフサイクルを使える
 * ・コードをまとめられる。
 * => ○機能ベース（何をやっているのか。）
 * => ×時の流れベース（ライフサイクルのメソッド毎）
 *
 */

/**
 * useEffect() の仕組み
 * レンダーごとにuseEffect()内の処理が走る。
 * ・代替できるメソッドは以下。
 *  componentDidMount()
 *  componentDidUpdate()
 *  componentWillUnmount()
 */
// 1.useState関数をインポート
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
const Reacthooks = () => {
  // 2.宣言する state変数名、state変更関数名、state初期値
  const [isPublished, togglePublished] = useState(false);

  // 3.JSX内で使う

  // useEffect使い方。
  /**
   * pattern1. レンダー毎
   * ・基本の形
   * ・useEffect()内にコールバック関数を書く
   */
  useEffect(() => {
    // Callbackはレンダー毎に呼ばれる。
    console.log("render");
    // returnするCallback関数はアンマウント時に呼ばれる。
    //（=> クリーンアップ関数）
    return () => {
      console.log("unmounting");
    };
  });

  /**
   * pattern2.マウント時のみ
   */
  useEffect(() => {
    // Callbackはレンダー毎に呼ばれる。
    console.log("render");
    // 第2引数の配列内の値を前回レンダーと今回レンダーで比較
    // →変更があればCallback関数を実行
    // 第2引数に空の配列を渡すと、最初の1回（マウント時）のみ実行される。
  }, []);

  /**
   * pattern3. マウント＆アンマウント
   * ・①と②の複合系
   * ・通常のcallBackはマウント時のみ
   * ・アンマウント時はreturn内のクリーンアップ関数が実行される。
   */
  useEffect(() => {
    // Callbackはレンダー毎に呼ばれる。
    console.log("render");
    // returnするCallback関数はアンマウント時に呼ばれる。
    //（=> クリーンアップ関数）
    return () => {
      console.log("unmounting");
    };
  }, []);

  /**
   * pattern4. 特定のレンダー時
   * ・マウント時に実行される
   * ・limitの値が変わった時に実行される
   * ・↓の例で言えば、limitの値がtrue→falseになったとき
   */
  const [limit, release] = useState(true);
  useEffect(() => {
    console.log("render");
  }, [limit]);
};

export default Reacthooks;
