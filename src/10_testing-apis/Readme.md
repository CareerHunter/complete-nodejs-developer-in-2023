#   Section 10: Testing APIs

-   install both server and client

```
npm install
```

-   deployment both client and sever

```
npm run deploy
```

## NASA API Test

- under server folder `cd server`

- install jest `npm install jest --save-dev`

-   in package.json change `"test": "echo \"Error: no test specified\" && exit 1",` to `"test": "jest",` and add `"test-watch": "jest --watch",`

```
"test": "jest",
"test-watch": "jest --watch",
```

- run test `npm test`


---

[Section 10: Testing APIs](../../contents/Section-10_Testing-APIs.md) 