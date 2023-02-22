# 108. Environment Variables On Windows

Heads up! If you're using the default Windows shell, the syntax to set an environment variable like `PORT` is slightly different than what we saw in the previous video. To set `PORT` in your package.json on Windows, you'll want to write:

```
"start": "set PORT=5000&& node src/server.js"
```

Instead of:

```
"start": "PORT=5000 node src/server.js"
```

Alternatively, there's the [cross-env](https://www.npmjs.com/package/cross-env) NPM package which will work all platforms. Both options work!


https://github.com/odziem/nasa-project

<details>
  <summary> Section 9: NASA Project </summary>

  - [Codebase: nasa-project](../src/9_nasa-project)

</details>

---

[Previous](./107_API-Server-Setup.md) | [Next](./109_GET-planets.md)