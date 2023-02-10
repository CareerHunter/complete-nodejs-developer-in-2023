# 36. The Node Event Emitter

-   [Events](https://nodejs.org/api/events.html#events_events)

-   event.js
```
const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on('race', (result) => {
    if (result === 'win'){
        console.log('Congratulations! You are the best!');
    }        
});

// Subscribe to celebrity for Observer 2
celebrity.on('race', (result) => {
    if (result === 'lost'){
        console.log('Boo I could have better than that!');
    }     
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
celebrity.emit('race', 'tie');

```

-   node event.js

```
Congratulations! You are the best!
Boo I could have better than that!
Process exit event with code:  0
```

---

[Previous](./33_Comparing-Node-With-PHP-and-Python.md) | [Next](./37_Recommended-Path_Asynchronous-JavaScript.md)
