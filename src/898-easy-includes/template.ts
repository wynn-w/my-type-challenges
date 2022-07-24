/**
 * @notes 本题考点：
 *              1. equal
 *              2. recursion
 * */
// type Includes<T extends readonly unknown[], U> = T extends [infer First, ...infer Rest]
//   ? First extends U
//     ? true
//     : Includes<Rest, U>
//   : false;
// // type c<T extends unknown, U> = T extends U ? true : false
// // let e: c<[1], 1 | 2> // extends 不同类型处理的区别

// 需要具体的「等于」逻辑实现
import { Equal } from '@type-challenges/utils';
type Includes<T extends readonly unknown[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
export type { Includes };
