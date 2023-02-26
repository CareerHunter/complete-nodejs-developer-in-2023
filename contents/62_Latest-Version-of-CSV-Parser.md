# 62. Latest Version of CSV Parser

Heads up! The latest version of the csv-parse package made a small change in how it exports the `parse` function.

We will now need to replace the code below:

```
const parse = require('csv-parse');
```

And instead pick out the parse function from the exported object, by destructuring it like so:

```
const { parse } = require('csv-parse');
```

Everything else stays the same!

Let's learn a bit more about streaming in the next video before jumping right back into our project!

https://github.com/odziem/planets-project

<details>
  <summary> Section 6: Node.js File I/O - Planets Project </summary>

  - [Codebase: planets-project](../src/s6_planets-project/)

</details>


---

[Previous](./61_Setting-Up-Our-CSV-Parser.md) | [Next](./63_Streaming-Large-Data-Files.md)