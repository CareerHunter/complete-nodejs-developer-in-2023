# 117. Setting BUILD_PATH On Windows

Friendly reminder! BUILD_PATH is an environment variable, just like PORT. On Windows, with the default shell, the way we set our BUILD_PATH variable is:

```
set BUILD_PATH=../server/public&& react-scripts build
```

Rather than the `bash` version:

```
BUILD_PATH=../server/public react-scripts build
```

**Important!** Copy the `set` command exactly, making sure there's no space between the word public and the && symbols. If you add a space, Windows will add that space to the name of the build folder, and our front end dashboard will never load.



All good? Alright, onwards with the project!



https://github.com/odziem/nasa-project

<details>
  <summary> Section 9: NASA Project </summary>

  - [Codebase: nasa-project](../src/9_nasa-project)

</details>



---

[Previous](./116_Serving-React.js-Front-End-In-Production.md) | [Next](./118_Logging-Requests-With-Morgan.md)