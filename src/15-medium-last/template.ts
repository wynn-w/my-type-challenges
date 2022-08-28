/**
 * @notes 解题思路：
 *              1. 拓展符 + infer
 *              2. 利用数字的长度
 *        知识点：
 *              1. T['length'] 可以获取数组长度
 * */
// type Last<T extends any[]> = T extends [...infer _P, infer Last] ? Last : never;
type Last<T extends any[]> = [never,...T][T['length']];
