/**
 * @notes 解题思路：参考题 106
 *
 * */
type TrimRight<S extends string> = S extends `${infer R}${Empty}` ? TrimRight<R> : S
type Trim<S extends string> = TrimRight<TrimLeft<S>>
