import { equal } from "assert";

interface InnerFoo {
  buzz: number;
}

interface OuterFoo {
  bar: InnerFoo | null;
}

const innerFoo = null;
const foo: OuterFoo = { bar: innerFoo };

const buzz1: number = foo.bar ? foo.bar.buzz : -1;

equal(buzz1, -1);
console.log(buzz1);
