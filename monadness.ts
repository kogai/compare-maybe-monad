import { Either, Option } from "monadness";

interface InnerFoo {
  buzz: number;
}

interface OuterFoo {
  bar: Option<InnerFoo>;
}

const innerFoo: Option<InnerFoo> = Option.none<InnerFoo>();
const foo: OuterFoo = { bar: innerFoo };

// 値を直接取り出す
const buzz1 = foo.bar
  .getOrElse(() => ({ buzz: -1 }));
