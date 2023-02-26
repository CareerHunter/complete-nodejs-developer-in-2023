# 64. Reading Our Planets Data

-   [Creating Read Streams in Node](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)


https://github.com/odziem/planets-project

<details>
  <summary> 64. Reading Our Planets Data - Result capture </summary>

  ---

  - `index.js`
  ```
  const  { parse } = require('csv-parse');
  const fs = require('fs');

  const result = [];

  fs.createReadStream('kepler_data.csv')
      .on('data', (data) => {
          result.push(data);
      })
      .on('error', (err) => {
          console.log(err);
      })
      .on('end', () => {
          console.log(result);
          console.log('done');
      });
  // parse();
  ```

  -   run `node index.js`

  <p align="center" ><img src="../imags/64_Reading-Our-Planets-Data.png" width="100%" ></a></p>

  ---

</details>

<details>
  <summary> Section 6: Node.js File I/O - Planets Project </summary>

  - [Codebase: planets-project](../src/s6_planets-project/)

</details>


---

[Previous](./63_Streaming-Large-Data-Files.md) | [Next](./65_Parsing-Our-Planets-Data.md)