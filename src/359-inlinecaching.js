// inline caching
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: "Johnson",
    lastName: "Junior"
}

console.log(findUser(userData))