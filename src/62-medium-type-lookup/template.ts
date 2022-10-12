/**
 * @notes 本题考点：
 *              1. 取出类型中指定属性
 * */

type LookUp<U, T> = U extends { type: T } ? U : never;
