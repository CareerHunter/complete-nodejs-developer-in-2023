# 67. Exploring Habitable Planets

-   [THE HABITABLE EXOPLANETS CATALOG](https://phl.upr.edu/projects/habitable-exoplanets-catalog)

---

https://github.com/odziem/planets-project

<details>
  <summary> 67. Exploring Habitable Planets - Result capture </summary>

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
            console.log(habitablePlanets.map((planet) => {
                return planet['kepler_name'];
            }));
            console.log(`${habitablePlanets.length} habitable planets found!`);
        });

  ```
  ---

  -   run `node index.js`

  ```
  [
  'Kepler-1652 b',
  'Kepler-1410 b',
  'Kepler-296 A f',
  'Kepler-442 b',
  'Kepler-296 A e',
  'Kepler-1649 b',
  'Kepler-62 f',
  'Kepler-452 b'
  ]
  8 habitable planets found!
  ```
</details>

<details>
  <summary> Section 6: Node.js File I/O - Planets Project </summary>

  - [Codebase: planets-project](../src/s6_planets-project/)

</details>


---

[Previous](./66_Finding-Habitable-Planets.md) | [Next](./68_Code-For-This-Section.md)