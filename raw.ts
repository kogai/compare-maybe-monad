interface InnerFoo {
  buzz: number;
}

interface OuterFoo {
  bar: InnerFoo | null;
}

const innerFoo = null;
const foo: OuterFoo = { bar: innerFoo };

const buzz: number = foo.bar ? foo.bar.buzz : -1;
console.log(buzz);
