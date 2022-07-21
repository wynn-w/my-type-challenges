/**
 * @notes 题目要求：
 *              1. 传入类型为 Promise
 *              2. 返回 Promise包裹的类型
 *
 *        本题考点：
 *              1. infer 
 *        参考连接：
 *              1. https://jkchao.github.io/typescript-book-chinese/tips/infer.html
 * */
// // 解决基础
// type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P : never;
// // 递归 -> 有递归后，看语法提示🤣
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : never;

