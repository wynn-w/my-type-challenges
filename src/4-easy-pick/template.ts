/**
 * @notes 本题期望：
 *                  从接口 Todo 中取出传入 key 以及 key type（假设传入的 key 一定是 Todo 的属性），
 *                  拷贝取出的属性名以及属性类型至类型 MyPick 中  
 */

/**
 * @description Implement the built-in Pick<T, K> generic without using it.
 *              Constructs a type by picking the set of properties K from T
 * */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

