/**
 * @notes 题目要求：
 *              1. 获取元组的长度
 *              2. + 不接收非元组
 *
 *        本题考点：
 *              1. as const
 * */
type Length<T extends readonly any[]> = T["length"];