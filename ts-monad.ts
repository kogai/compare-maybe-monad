/// <reference path="./node_modules/tsmonad/dist/tsmonad.d.ts" />
import { Maybe } from "tsmonad";

interface InnerFoo {
  buzz: number;
}

interface OuterFoo {
  bar: Maybe<InnerFoo>;
}

const innerFoo: Maybe<InnerFoo> = Maybe.nothing<InnerFoo>();
const foo: OuterFoo = { bar: innerFoo };

const buzz: number = foo.bar.caseOf({
  just: x => x.buzz,
  nothing: () => -1
});
console.log(buzz);
