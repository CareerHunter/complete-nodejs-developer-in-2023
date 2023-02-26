const promisesOne = new Promise((resolve, reject) => 
    setTimeout(resolve, 3000));
const promisesTwo = new Promise((resolve, reject) => 
    setTimeout(reject, 3000));

Promise.all([promisesOne, promisesTwo]).then(data => console.log(data))
    .catch(err => console.log('Something failed', err));

// Promise.allSettled([promisesOne, promisesTwo]).then(data => console.log(data))
//     .catch(err => console.log('Something failed', err));