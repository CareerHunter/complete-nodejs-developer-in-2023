# 119. The Launches Model

-   [JavaScript Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

https://github.com/odziem/nasa-project

-   `server/src/models/launches.model.js` (need verify)
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

module.exports = {
    launches,
}

```

<details>
  <summary> Section 9: NASA Project </summary>

  - [Codebase: nasa-project](../src/9_nasa-project)

</details>



---

[Previous](./118_Logging-Requests-With-Morgan.md) | [Next]()