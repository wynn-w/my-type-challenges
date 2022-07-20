/**
 * @notes 本题考点：
 *              1. union 类型遍历
 *              2. 判断
 * */
type MyExclude<T, U> = T extends U ? never : T
