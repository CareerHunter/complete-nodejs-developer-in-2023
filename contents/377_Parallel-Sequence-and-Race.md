# 377. Parallel, Sequence and Race

-   https://replit.com/@aneagoie/async](https://replit.com/@aneagoie/async)

- `377-Parallel-Sequence-and-Race.js`
```
// 3

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

console.log(a(), b(), c()); // Promise { <pending> } Promise { <pending> } Promise { <pending> }

// parallel
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

// race
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

// sequencial
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)       
```

-   run `node 377-Parallel-Sequence-and-Race.js`
```
Promise { <pending> } Promise { <pending> } Promise { <pending> }
race is done: a
prallel is done: a b c
sequence is done a b c
```

<details>
  <summary> Section 22: Appendix: Asynchronous JavaScript </summary>

  - [Codebase: Async](../src/s22_Async/)

</details>


---

[Previous](./376_Job-Queue.md) | [Next](./378_ES2020_allSettled().md)