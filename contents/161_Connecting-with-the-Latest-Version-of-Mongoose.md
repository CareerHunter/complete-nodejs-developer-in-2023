# 161. Connecting with the Latest Version of Mongoose

Heads up! If you've installed the latest version of Mongoose (version 6 and higher), you can save yourself a few lines of code!

Mongoose now uses the best possible options in the MongoDB driver by default. Instead of connecting to Mongo like so:

```
   await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
```

You now only need to pass in the URL, like so:

```
await mongoose.connect(MONGO_URL);
```

The Mongoose team has improved their API and made our life a little bit easier. Good stuff!


<details>
  <summary> Section 12: Databases </summary>

  - [Codebase: s12_nasa-project-pm2](../src/s12_nasa-project-pm2/)

</details>

---

[Previous](./160_Connecting-to-MongoDB.md) | [Next](./162_Mongoose.md)