# 123. POST /launches: Creating Launches 1


https://github.com/odziem/nasa-project


<details>
  <summary> 123. POST /launches: Creating Launches 1 </summary>

-   `server/src/models/launches.model.js` 
```
const launches = new Map();

let latestFlightNumber = 100;

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

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['Zero to Mastery', 'NASA'],
            flightNumber: latestFlightNumber,

    }));
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}
```

- postman `Post http://localhost:8000/launches`
    -   Body --> raw --> JSON
```
{
    "mission": "ZTM155",
    "rocket": "ZTM Experimental IS1",
    "destination": "Kepler-186 f",
    "launchDate": "January 17, 2030"
}
```

</details>  

<details>
  <summary> Section 9: NASA Project </summary>

  - [Codebase: nasa-project](../src/9_nasa-project)

</details>



---

[Previous](./122_Working-With-Data-Models_Building-a-Data-Access-Layer.md) | [Next]()