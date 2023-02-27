#   Section 12

**server**

- install pm2 on server `sudo npm i pm2 -g`

- add script `"cluster": "pm2 start src/server.js -i max"` on package.json

**project root**

-   add script `"deploy-cluster": "npm run build --prefix client && npm run cluster --prefix server",` on **project root** `package.json`


---

[Section 10: Testing APIs](../../contents/Section-10_Testing-APIs.md) 