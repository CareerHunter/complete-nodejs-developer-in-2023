# 146. Using PM2 To Create Clusters

-   [PM2 on NPM](https://www.npmjs.com/package/pm2)

-   [Nodejs application Error: bind EADDRINUSE when use pm2 deploy](https://stackoverflow.com/questions/18687877/nodejs-application-error-bind-eaddrinuse-when-use-pm2-deploy)

https://github.com/odziem/performance-example

- server.js
```
const express = require('express');

const app = express();

function delay (duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        // event loop is blocked....
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding ding ding! ${process.pid}`);
});

console.log('Running sever.js...')
console.log('Worker process started.');
app.listen(3000);
```

<details>
  <summary> 146. Using PM2 To Create Clusters </summary>

  - install PM2 `npm install pm2` (Note you can not use pm2 command)

  - install PM2 `npm install pm2 -g` or `sudo npm install pm2 -g` (Note you can use pm2 command)

  - run server.js `pm2 start server.js` then stop server.js `pm2 stop server.js` if needed

<p align="center" >
    <img src="../imags/146_Using-PM2-To-Create-Clusters.png" width="90%" > 
    <img src="../imags/146_Using-PM2-To-Create-Clusters_2.png" width="90%" > 
</p>  

  - run server.js `pm2 start server.js -i max` 

<p align="center" >
    <img src="../imags/146_Using-PM2-To-Create-Clusters_3.png" width="90%" > 
</p>   

  - run server.js `pm2 logs` 

<p align="center" >
    <img src="../imags/146_Using-PM2-To-Create-Clusters_4.png" width="90%" > 
</p>     

</details>    

<details>
  <summary> Section 11: Improving Node Performance </summary>

  - [Codebase: performance-example](../src/s11_performance-example/)

</details>

---

[Previous](./145_The-PM2-Tool.md) | [Next](./147_Managing-Live-Clusters-With-PM2.md)