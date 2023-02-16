# 80. Requests and Responses as Streams

 <p align="center" >
    <img src="../imags/80_Requests-and-Responses-as-Streams.png" width="30%" >
    <img src="../imags/65_Parsing-Our-Planets-Data_1.png" width="30%" > 
    <img src="../imags/65_Parsing-Our-Planets-Data.png" width="30%" >       
 </p>


https://github.com/odziem/http-server

<details>
  <summary> example</summary>

  - `index.js`
  ```
const http = require('http');

PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Nikola Tesla'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton'
    },
    {
        id: 2,
        name: 'Albert Einstein'
    }
]
    
server.on('request', (req, res) => {
    const items = req.url.split('/');
    // /friends/2 => ['', 'friends', '2']
    // /friends/
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('request:', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    } else if (req.method === 'GET' && items[1] === 'friends'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');      
        if (items.length === 3) {
            const friendsIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendsIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === 'GET' && items[1] === 'messages'){
        res.setHeader('Content-Type', 'text/html'); 
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello Isaac! </li>');
        res.write('<li> What are your thoughts on astronomy? </li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
});
  ```
  ---

  -   run `node index.js` 
  -   on 'localhost:3000' console keyin

  ```
  fetch('http://localhost:3000/friends', {
      method: 'POST',
      body: JSON.stringify({id: 3, name: 'Grace Hopper'})
    })
    .then((response) => response.json())
    .then((friend) => console.log(friend));
  ```
  
---

<p align="center" >
    <img src="../imags/80_Requests-and-Responses-as-Streams_3.png" width="100%" >
</p>

 ---

 -  on webroswer goto `http://localhost:3000/friends` 

 ---

<p align="center" >
    <img src="../imags/80_Requests-and-Responses-as-Streams_1.png" width="100%" >
</p>


</details>

<details>
  <summary> Section 7: Web Server with Node.js </summary>

  - [Codebase: http-server](../src/7_http-server/)

</details>

---

[Previous](./79_POSTing-Data-to-the-Server.md) | [Next](./81_Web-Servers-Recap.md)