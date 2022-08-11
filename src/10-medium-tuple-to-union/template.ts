/**
 * @notes 解题思路：
 *                1. 利用数组下标一定是数字的特性
 *                2. 利用 infer 递归套取以一个元素
 *                   => 注意三元表达式为真时的处理
 * */
// type TupleToUnion<T extends unknown[]> = T[number];
type TupleToUnion<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never;
