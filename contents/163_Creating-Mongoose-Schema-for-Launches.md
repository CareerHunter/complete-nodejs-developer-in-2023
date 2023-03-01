# 163. Creating Mongoose Schema for Launches

<details>
  <summary> 163. Creating Mongoose Schema for Launches </summary>

-   `server/src/models/launches.mongo.js`

```
const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,        
    },
    launcheDate: {
        type: Date,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },  
    customers: [ String ],
    upcoming: {
        type: Boolean,
        required: true,
    },  
    success: {
        type: Boolean,
        required: true,
        default: true
    },  
})
```

</details>

<details>
  <summary> Section 12: Databases </summary>

  - [Codebase: s12_nasa-project-pm2](../src/s12_nasa-project-pm2/)

</details>

---

[Previous](./162_Mongoose.md) | [Next](./164_Exercise_Creating-Mongoose-Schema-for-Planets.md)