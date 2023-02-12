// for await of 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

/* 
const getData = async function(){
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(urls => {
            return fetch(urls).then(resp => resp.json())
        }))
        console.log('users: ', users);
        console.log('posts: ', posts);
        console.log('albums: ', albums);
    } catch (err){
        console.log('oops', err)
    }
} 
getData();
*/


/* 
const loopThroughUrls = url => {
    for (url of urls){
        console.log(url)
    }
}
loopThroughUrls(urls);
*/

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}
 
getData2();