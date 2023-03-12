/**
 * @notes 解题思路：逐位判断是否为空，回调自身
 *
 *        本题考点：
 *              1. 取出字符串中指定内容
 *
 * */

type Empty = '' | ' ' | '\n' | '\t';
// // Error: Type instantiation is excessively deep and possibly infinite
// type TrimLeft<S extends string> = S extends `${Empty}${infer Rest}` ? TrimLeft<Rest> : S;
// 不要武断的判断前一个值就是空
type TrimLeft<S extends string> = S extends `${infer First}${infer Rest}` ? (First extends Empty ? TrimLeft<Rest> : S) : '';