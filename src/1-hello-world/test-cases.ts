import { Equal, Expect, NotAny } from '@type-challenges/utils';
type cases = [Expect<NotAny<HellowWorld>>, Expect<Equal<HellowWorld, string>>];
