//  ASYNC AWAIT
const urls = [
    'https: //jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// console.log(fetch('https://jsonplaceholder.typicode.com/users'), Promise);

/* 
Promise.all(urls.map(urls => {
    return fetch(urls).then(resp => resp.json())
})). then( results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch( err => console.error('err.message: ', err.message));
*/

const getData = async function(){
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(urls => {
            return fetch(urls).then(resp => resp.json())
        }))
        console.log('users: ', users);
        console.log('posts: ', posts);
        console.log('albums: ', albums);
    } catch {
        console.log('oops')
    }
}

getData()
