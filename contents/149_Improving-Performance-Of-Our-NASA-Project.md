# 149. Improving Performance Of Our NASA Project


https://github.com/odziem/nasa-project

**server**

- install pm2 on server `sudo npm i pm2 -g`

- add script `"cluster": "pm2 start src/server.js -i max"` on package.json

**project root**

-   add script `"deploy-cluster": "npm run build --prefix client && npm run cluster --prefix server",` on **project root** `package.json`


<details>
  <summary> 11_nasa-project-pm2 </summary>

-   [Codebase: nasa-project-pm2](../src/11_nasa-project-pm2/)

</details>

<details>
  <summary> result - capture </summary>

-   goto `http://localhost:8000/launch` add two launches --> `http://localhost:8000/upcoming` only two not three launches ???

<p align="center" >
    <img src="../imags/149_Improving-Performance-Of-Our-NASA-Project.png" width="90%" > 
    <img src="../imags/149_Improving-Performance-Of-Our-NASA-Project_2.png" width="90%" > 
    <img src="../imags/149_Improving-Performance-Of-Our-NASA-Project_3.png" width="90%" > 
</p> 

</details>  


---

[Previous](./148_Zero-Downtime-Restart.md) | [Next](./150_Worker-Threads.md)