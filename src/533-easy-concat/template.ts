
/**
 * @notes 题目要求：
 *              1. 传入类型为 数组
 *              2. 合并传入类型并做数组导出
 *        补充：
 *              1. unknown 与 any 的区别
 * */

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
