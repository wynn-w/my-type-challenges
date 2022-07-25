/**
 * @notes 本题考点：
 *              1. 通过 infer 剥离参数 
 *        参考连接：
 *              1. https://jkchao.github.io/typescript-book-chinese/tips/infer.html/#内置类型
 * */
type MyParameters<T extends (...args: unknown[]) => any> = T extends (...args: infer P) => any ? [...P] : [];