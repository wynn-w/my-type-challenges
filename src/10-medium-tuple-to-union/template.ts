/**
 * @notes 解题思路：
 *                1. 利用数组下标一定是数字的特性
 * */
type TupleToUnion<T extends unknown[]> = T[number];