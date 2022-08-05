/**
 * @notes 解题思路：
 *                1. 分两种场景：传入为空则全部转化readonly；传入部份则转化需要被转化的
 *                2. 根据第一点，场景一则是 Q.7 readonly 场景二则为 Q.3 omit
 *                3. readonly 与 omit 相交则得出最终结果
 *        本题考点：
 *                1. & 操纵符
 *                2. 类型预设值（避免报缺参）
 * */
type MyReadonly2<T extends unknown, K extends keyof T = keyof T> = MyReadonly<T> & MyOmit<T, K>;
interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}
