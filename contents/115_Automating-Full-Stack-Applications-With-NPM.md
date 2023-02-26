# 115. Automating Full Stack Applications With NPM


## Project Root folder

- install package.json and create .gitignore file 
  ```
  npm init -y 
  npx gitignore node
  ````
- add scripts on `package.json`

```
  "scripts": {
    "install-server": "npm install --prefix server",
    "insatll-client": "npm install --prefix client",
    "install": "npm run install-server && npm run insatll-client",
    "server": "npm run watch --prefix server",
    "client": "npm start --prefix client",
    "watch": "npm run server & npm run client",
    "test": "npm run test --prefix server && npm run test --prefix client"
  },
```

https://github.com/odziem/nasa-project

<details>
  <summary> Section 9: NASA Project </summary>

  - [Codebase: nasa-project](../src/s9_nasa-project/)

</details>

---

[Previous](./114_Common-Issues-With-NPM-Scripts.md) | [Next](./116_Serving-React.js-Front-End-In-Production.md)