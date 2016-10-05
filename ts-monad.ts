/// <reference path="./node_modules/tsmonad/dist/tsmonad.d.ts" />
import { equal } from "assert";
import { Maybe } from "tsmonad";

interface InnerFoo {
  buzz: number;
}

interface OuterFoo {
  bar: Maybe<InnerFoo>;
}

const innerFoo: Maybe<InnerFoo> = Maybe.nothing<InnerFoo>();
const foo: OuterFoo = { bar: innerFoo };

// 値を直接取り出す
const buzz1 = foo.bar
  .valueOr({ buzz: -1 })
  .buzz;

// パターンマッチ風の値取り出し
const buzz2: number = foo.bar
  .caseOf({
    just: x => x.buzz,
    nothing: () => -1,
  });

equal(buzz1, -1);
equal(buzz2, -1);
console.log(buzz1, buzz2);
