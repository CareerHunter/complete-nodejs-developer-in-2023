# 378. ES2020: allSettled()

-   `378-ES2020_allSettled.js`
```
const promisesOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000));
const promisesTwo = new Promise((resolve, reject) => 
    setTimeout(reject, 3000));

Promise.all([promisesOne, promisesTwo]).then(data => console.log(data))
    .catch(err => console.log('Something failed', err));
```

- run `node 378-ES2020_allSettled.js`

```
Something failed undefined
```

---

-   `378-ES2020_allSettled.js`   
```
const promisesOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000));
const promisesTwo = new Promise((resolve, reject) => 
    setTimeout(reject, 3000));

Promise.allSettled([promisesOne, promisesTwo]).then(data => console.log(data))
    .catch(err => console.log('Something failed', err));
```

- run `node 378-ES2020_allSettled.js`

```
[
  { status: 'fulfilled', value: undefined },
  { status: 'rejected', reason: undefined }
]
```

<details>
  <summary> Section 22: Appendix: Asynchronous JavaScript </summary>

  - [Codebase: Async](../src/s22_Async/)

</details>


---

[Previous](./377_Parallel-Sequence-and-Race.md) | [Next](./379_Threads-Concurrency-and-Parallelism.md)