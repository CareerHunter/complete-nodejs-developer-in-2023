# 143. Maximizing Cluster Performance


https://github.com/odziem/performance-example

- server.js
```
const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay (duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        // event loop is blocked....
    }
}

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    //  [5, 1, 2, 3, 4].sort()
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding ding ding! ${process.pid}`);
});

console.log('Running sever.js...')
if (cluster.isMaster) {
    console.log('Master has been started...');
    const NUM_WORKERS = os.cpus().length;
    console.log('NUM_WORKERS: ', NUM_WORKERS);
    for (let i = 0; i < NUM_WORKERS; i++){
        cluster.fork();
    }  
} else {
    console.log('Worker process started.');
    app.listen(3000);
}
```

<details>
  <summary> result - capture </summary>

- run `npm run start`

<p align="center" >
    <img src="../imags/143_Maximizing-Cluster-Performance_1.png" width="90%" > 
    <img src="../imags/143_Maximizing-Cluster-Performance.png" width="90%" > 
    <img src="../imags/143_Maximizing-Cluster-Performance_2.png" width="90%" > 
    <img src="../imags/143_Maximizing-Cluster-Performance_3.png" width="90%" > 
    <img src="../imags/143_Maximizing-Cluster-Performance_4.png" width="90%" > 
    <img src="../imags/143_Maximizing-Cluster-Performance_5.png" width="90%" > 
    <img src="../imags/143_Maximizing-Cluster-Performance_6.png" width="90%" > 
    <img src="../imags/143_Maximizing-Cluster-Performance_7.png" width="90%" > 
</p> 

</details>  


<details>
  <summary> Section 11: Improving Node Performance </summary>

  - [Codebase: performance-example](../src/s11_performance-example/)

</details>

---

[Previous](./142_Clustering-In-Action.md) | [Next](./144_Load-Balancing.md)