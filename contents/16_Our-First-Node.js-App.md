# 16. Our First Node.js App

-   hello.js
```
const mission = process.argv[2];

if (mission === 'learn') {
    console.log('Time to write some Node code!');
} else {
    console.log(`Is ${mission} really more fun?`);
}
```

- node hello.js
```
node hello.js explore
```
```
Is explore really more fun?
```

```
node hello.js learn
```

```
Time to write some Node code!
```
