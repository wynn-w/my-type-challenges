/**
 * @notes 题目要求：
 *              1. 获取数组中第一个元素
 *              2. + 不接收非数组
 *              3. + 不接收类数组对象
 *
 *        本题考点：
 *              1. 如何做判断
 * */
//  option 1
// type First<T extends unknown[]> = T[0] extends T[number] ? T[0] : never;

//  * option 2
type First<T extends unknown[]> = T extends [infer Frist, ...infer _Rest] ? Frist : never;
