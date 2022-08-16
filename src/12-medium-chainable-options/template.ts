/**
 * @notes 解题思路：
 *                1. 获取 option 的两个行参
 *                2. 定义一个获取 option 结果的变量
 *                3. 生成目标结构
 *                4. 判断 key 是否在 T 中，在则判断 T[K] 是否已经存在（处理同 K 的不同类型的 V）
 *                5. 移除前一个相同的 key
 * */

type Chainable<T extends Object = {}> = {
  option: <K extends string, V>(key: K extends keyof T ? (V extends T[K] ? never : K) : K, value: V) => Chainable<MyOmit<T, K> & Record<K, V>>;
  get(): T;
};