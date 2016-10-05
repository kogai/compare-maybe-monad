import { Option, None } from "monapt";

interface InnerFoo {
  buzz: number;
}

interface OuterFoo {
  bar: Option<InnerFoo>;
}

const innerFoo: Option<InnerFoo> = None;
const foo: OuterFoo = { bar: innerFoo };

// 値を直接取り出す
const buzz1: number = foo.bar
  .getOrElse(() => ({ buzz: -1 })).buzz;

// パターンマッチ風の値取り出し
const buzz2 = foo.bar
  .match({
    Some: x => x.buzz,
    None: () => -1,
  });

console.log(buzz1, buzz2);
