# 160. Connecting to MongoDB

-   [Official MongoDB Website](https://www.mongodb.com/)

<details>
  <summary> 160. Connecting to MongoDB </summary>

- under server folder install mongoose `npm install mongoose`

- `server.js`
```
const http = require('http');
const mongoose = require('mongoose')

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:fdFXk4X3B8nFA9d1@nasacluster.yomb40u.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    
    /*
    await mongoose.connect(MONGO_URL, {
        //useNewUrlParse: true,
        //useFindAndModify: false,
        //useCreateIndex: true,
        useUnifiedTopology: true,
    });
    */

    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
};

startServer();
```

-   under server run `npm start`

```
> nasa-project-api@1.0.0 start
> node src/server.js

MongoDB connection ready!
8 habitable planets found!
Listening on port 8000...
```
</details>

<details>
  <summary> Section 12: Databases </summary>

  - [Codebase: SpaceX-API](../src/s12_nasa-project-pm2/)

</details>

---

[Previous](./159_Setting-up-MongoDB-Atlas.md) | [Next]()