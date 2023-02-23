#   Section 9: NASA Project

## NASA Dashboard Front End Setup

  - copy unzipped files into `client` folder

  - install package `npm install` 

  - create gitignore file `npx gitignore node` 

  - install CORS `npm i cors`

  - run client `npm start`

  - install csv-parse `npm i csv-parse`

<details>
  <summary> Capture - FrontEnd Setup </summary>  

  <p align="center" >
    <img src="../imags/103_NASA-Dashboard-Front-End-Setup.png" width="30%" >
    <img src="../imags/103_NASA-Dashboard-Front-End-Setup_2.png" width="30%" >
    <img src="../imags/103_NASA-Dashboard-Front-End-Setup_3.png" width="30%" >
</p> 

</details>

## NASA API Server Setup 

- install package.json and create .gitignore file 
  ```
  npm init -y 
  npx gitignore node
  ````

  - install express `npm i express` 
 
  - install nodemon `npm i nodemon --save-dev`

  - add script: `"watch": "nodemon server.js",` in `package.json`


<details>
  <summary> Capture - Server Setup </summary>

-   run `npm run watch` 

-  `http://localhost:3000/`

<p align="center" >
    <img src="../../imags/100_Layouts-and-Separation-of-Concerns.png" width="90%" >
    <img src="../../imags/100_Layouts-and-Separation-of-Concerns_2.png" width="90%" >
</p> 

</details>

---

[Section 9: NASA Project](../../contents/Section-9_NASA-Project.md) 