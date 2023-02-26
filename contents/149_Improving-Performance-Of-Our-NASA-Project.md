# 149. Improving Performance Of Our NASA Project

https://github.com/odziem/performance-example

**server**

- install pm2 on server `sudo npm i pm2 -g`

- add script `"cluster": "pm2 start src/server.js -i max"` on package.json

**project root**

-   add script `"deploy-cluster": "npm run build --prefix client && npm run cluster --prefix server",` on **project root** `package.json`


<details>
  <summary> 11_nasa-project-pm2 </summary>

  - [Codebase: nasa-project-pm2](../src/11_nasa-project-pm2/)

</details>

<details>
  <summary> result - capture </summary>

-   goto `http://localhost:8000/launch` add two lauches --> `http://localhost:8000/upcoming`

<p align="center" >
    <img src="../imags/149_Improving-Performance-Of-Our-NASA-Project.png" width="90%" > 
    <img src="../imags/149_Improving-Performance-Of-Our-NASA-Project_2.png" width="90%" > 
    <img src="../imags/149_Improving-Performance-Of-Our-NASA-Project_3.png" width="90%" > 
</p> 

</details>  

<details>
  <summary> Section 11: Improving Node Performance </summary>

- [Codebase: performance-example](../src/11_performance-example/)

</details>

---

[Previous](./148_Zero-Downtime-Restart.md) | [Next]()