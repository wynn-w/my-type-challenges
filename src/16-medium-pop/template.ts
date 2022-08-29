/**
 * @notes 解题思路：略
 *              
 *  * */
type Pop<T extends any[]> = T extends [...infer F, unknown] ? F : never;