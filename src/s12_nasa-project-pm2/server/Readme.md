#   NASA Project API - pm2

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
    "deploy-cluster": "npm run build --prefix client && npm run cluster --prefix server",
    "test": "npm run test --prefix server && npm run test --prefix client"
  },
```

- [deployment](../../contents/116_Serving-React.js-Front-End-In-Production.md) `npm run deploy`

- install morgan `npm install morgan`

- under project root run `npm run watch`

- or under project root run `npm run deploy`

- or run cluster `npm run deploy-cluster`  

## NASA Dashboard Front End Setup

**under client folder**

  - copy unzipped files into `client` folder

  - install package `npm install` 

  - create gitignore file `npx gitignore node` 

  - install CORS `npm i cors`

  - run client `npm start`

  - install csv-parse `npm i csv-parse`

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

  - install pm2 on server `sudo npm i pm2 -g`

  - add script `"cluster": "pm2 start src/server.js -i max"` on package.json

  - install mongoose `npm install mongoose`

## NASA API Test

- install jest `npm install jest --save-dev`

- install supertest `npm install supertest --save-dev`
