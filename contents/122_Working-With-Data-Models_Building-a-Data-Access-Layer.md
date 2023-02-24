# 122. Working With Data Models: Building a Data Access Layer

-   [Separation Of Concern](https://en.wikipedia.org/wiki/Separation_of_concerns)

-   [Separation of Concerns in Software Design](https://nalexn.github.io/separation-of-concerns/)

-   [Bonus: Example of Layered Architecture to Design iOS Apps](https://www.vadimbulavin.com/layered-architecture-ios/)

https://github.com/odziem/nasa-project

<details>
  <summary> 120. GET /launches: server </summary>

-   `server/src/models/launches.model.js` 
```
const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches () {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches,
}

```

-   `server/src/routes/launches/launches.controller.js`
```
const { getAllLaunches } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

module.exports = {
    httpGetAllLaunches,
}
```

-   `server/src/routes/launches/launches.router.js`
```
const express = require('express');
const {
    httpGetAllLaunches,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter;
```

- under project root run `npm run server`

<p align="center" >
    <img src="../imags/120_GET_launches.png" width="100%" > 
</p> 

- goto postman `GET http://localhost:8000/launches`

<p align="center" >
    <img src="../imags/120_GET_launches_2.png" width="100%" > 
</p> 

- goto postman `GET http://localhost:8000/planets`

<p align="center" >
    <img src="../imags/120_GET_launches_3.png" width="100%" > 
</p> 

</details>




<details>
  <summary> Section 9: NASA Project </summary>

  - [Codebase: nasa-project](../src/9_nasa-project)

</details>



---

[Previous](./121_Serving-Applications-With-Client-Side-Routing.md) | [Next]()