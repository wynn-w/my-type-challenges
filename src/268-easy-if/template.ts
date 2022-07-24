/**
 * @notes 略
 * */
// type If<C, T, F> = C extends null ? never : C extends true? T : F;
type If<C extends boolean , T, F> = C extends true? T : F;