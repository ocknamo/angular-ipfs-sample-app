export type PromiseType<T extends Promise<any>> = T extends Promise<infer P>
  ? P
  : never;
