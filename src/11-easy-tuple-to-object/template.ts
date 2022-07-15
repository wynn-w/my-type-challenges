/**
 * @notes 本题考点：
 *              1. 字面量类型（[...] as const）
 *              2. 数组的遍历
 *              3. // @ts-expect-error 断言 => 对象的索引类型的限制 number | string | symbol
 *        题目要求：
 *              1. 将数组元素作为类型 TupleToObject 的属性与字面量类型
 *              2. 限制对象的索引类型
 * */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
