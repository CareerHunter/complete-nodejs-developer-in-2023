#   NASA Project API

## Project Root folder

- install package.json and create .gitignore file 
  ```
  npm init -y 
  npx gitignore node
  ````
- add script on `package.json`

```
  "scripts": {
    "install-server": "npm install --prefix server",
    "insatll-client": "npm install --prefix client",
    "install": "npm run install-server && npm run insatll-client",
    "server": "npm run watch --prefix server",
    "client": "npm start --prefix client",
    "watch": "npm run server & npm run client",
    "deploy": "npm run build --prefix client && npm start --prefix server",
    "test": "npm run test --prefix server && npm run test --prefix client"
  },
```

- [deployment](../../contents/116_Serving-React.js-Front-End-In-Production.md) `npm run deploy`

- install morgan `npm install morgan`

- under project root run `npm run watch`

- or under project root run `npm run deploy`

## NASA Dashboard Front End Setup

**under client folder**

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

**under server folder**

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

