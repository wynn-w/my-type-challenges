/**
 * @notes 本题期望：
 *                结合示例，即要求给接口 Todo 的所有属性添加 readonly 关键字
 * */

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};
