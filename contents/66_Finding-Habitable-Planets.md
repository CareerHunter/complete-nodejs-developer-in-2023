# 66. Finding Habitable Planets

-   [A Review of the Best Habitable Planet Candidates](https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/)

---

https://github.com/odziem/planets-project

<details>
  <summary> 66. Finding Habitable Planets - Result capture </summary>

  - `index.js`
  ```
const  { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
    });
  ```
  ---

  -   run `node index.js`

  ```
  8 habitable planets found!
  ```
</details>

<details>
  <summary> Section 6: Node.js File I/O - Planets Project </summary>

  - [Codebase: planets-project](../src/6_planets-project/)

</details>

---

[Previous](./65_Parsing-Our-Planets-Data.md) | [Next](./67_Exploring-Habitable-Planets.md)