/**
 * @notes 解题思路：
 *                1. 能遍历所有属性
 *                2. 将遍历的属性与传入属性做对比
 *        本题考点：
 *                1. as 做类型断言，承接左右两侧
 * */
type MyOmit<T, K extends keyof any> = {
// type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
