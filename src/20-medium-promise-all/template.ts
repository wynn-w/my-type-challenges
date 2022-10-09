/**
 * @notes 解题思路：
 *              1. 看结果，返回值是基于 Promise 的数组，其中非只读项与被 Promise 包裹的返回数据类型
 *              2. 入参均为数组
 *              3. 那么，此时变成：遍历数组，如果元素为基础数据类型则添加进新数组，如果将 Promise 包裹值递归并添加进组
 *
 *        本题考点：
 *              1. as const
 * */

declare function PromiseAll<T extends readonly unknown[]>(
  values: readonly [...T],
): Promise<{ [P in keyof T]: T[P] extends Promise<infer F> ? F : T[P] }>;
