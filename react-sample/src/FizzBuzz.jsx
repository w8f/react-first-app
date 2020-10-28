import React from "react";

const FizzBuzz = () => {
  /**
   * １〜４０までの数字を出力
   * ただし3の倍数なら、その数字は"Fizz"と出力
   * ただし5の倍数なら、その数字は"Buzz"と出力
   * ただし3の倍数かつ5の倍数なら、その数字は"FizzBuzz"と出力
   * ただし、各数字の間に、カンマ　と　半角スペースを設けること
   * @see https://qiita.com/ohara5555/items/1aebf19c3ba63643b714
   */
  const outputsFizzBuzz = () => {
    /**
     * 文字列にカンマと半角スペースを加えます
     * @param {string} str 文字列
     * @returns カンマ付きの文字列
     */
    const addComma = (str) => {
      return str + ", ";
    };

    /**
     * FizzBuzz判定関数
     * @param {number} num 数字
     * @returns res 結果
     */
    const judgeFizzBuzz = (num) => {
      let res = "";
      if (num % 15 === 0) {
        res = "FizzBuzz";
        return res;
      }
      if (num % 5 === 0) {
        res = "Buzz";
        return res;
      }
      if (num % 3 === 0) {
        res = "Fizz";
        return res;
      }
      res = num;
      return res;
    };

    const FizzBuzzList = [];
    const limit = 40;

    const nums = Array(limit)
      .fill()
      .map((_, i) => i + 1);

    nums.forEach((num) => {
      let str =
        num === limit ? judgeFizzBuzz(num) : addComma(judgeFizzBuzz(num));
      FizzBuzzList.push(str);
    });

    return FizzBuzzList;
  };

  return (
    <div>
      <h2>FizzBuzzを出力します。</h2>
      <p>↓outputsFizzBuzz()出力結果</p>
      <p>{outputsFizzBuzz()}</p>
    </div>
  );
};

export default FizzBuzz;
