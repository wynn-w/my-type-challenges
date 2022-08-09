/**
 * @notes 解题思路：
 *                1. 分两种场景：基础值、函数和对象
 *                2. 对于 基础值与函数 直接处理
 *                3. 而 对象 则需要递归调用
 * */
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Function ? T[P] : T[P] extends Object ? DeepReadonly<T[P]> : T[P];
};