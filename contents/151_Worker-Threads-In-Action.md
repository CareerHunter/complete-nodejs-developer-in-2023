# 151. Worker Threads In Action

https://github.com/odziem/performance-example

-   `threads.js`
```
const {
    isMainThread, 
    workerData,
    Worker, 
} = require('worker_threads');

if (isMainThread) {
    console.log(`Main Thread! Processe ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1,3, 4, 3]
    });
} else {
    console.log(`Worker! Processe ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}
```
- run` node threads.js`

```
Main Thread! Processe ID: 45659
Worker! Processe ID: 45659
7,6,2,3 sorted is 2,3,6,7
Worker! Processe ID: 45659
1,3,4,3 sorted is 1,3,3,4
```



<details>
  <summary> Section 11: Improving Node Performance </summary>

- [Codebase: performance-example](../src/11_performance-example/)

</details>



---

[Previous](./150_Worker-Threads.md) | [Next](./152_Introduction-to-Databases.md)