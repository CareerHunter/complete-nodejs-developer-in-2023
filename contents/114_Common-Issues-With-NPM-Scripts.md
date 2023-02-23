# 114. Common Issues With NPM Scripts

Heads up! In the next video, on Windows, the `npm run watch` command may not start both your client and server, depending on your shell. To solve this:

1.  You can use an NPM package like [concurrently](https://www.npmjs.com/package/concurrently) or [npm-run-all](https://www.npmjs.com/package/npm-run-all) instead of the & symbol in the `npm run watch` command.

2.  Or if you have the **bash** shell installed on your machine (for example, through Git for Windows), set the default shell used by NPM to the bash shell by typing: `npm config set script-shell bash` in your terminal. All commands in your package.json will now run in a bash shell.

If you're having issues with the `npm install` command:

1.  Try removing package-lock.json in both the server/ and client/ folders.

1.  Try updating to a version of Node greater than 16 with an NPM version greater than 7.11. There is a bug in previous versions of NPM that prevents the `--prefix` parameter from working correctly.

What we're working with here is automation and specifically DevOps, which is often a dedicated role when working in a larger team of developers. It takes lots of practice and patience to get right!


https://github.com/odziem/nasa-project

<details>
  <summary> Section 9: NASA Project </summary>

  - [Codebase: nasa-project](../src/9_nasa-project)

</details>

---

[Previous](./113_Loading-Data-On-Startup.md) | [Next]()

