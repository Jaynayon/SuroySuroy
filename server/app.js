const http = require('http');
const axios = require('axios');

/*let testObject
//http://localhost:3000/users/email/test123@gmail.com
async function getUsers(req) {
    await axios.get(req)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
}

async function getUsers() {
    await axios.get('http://localhost:3000/users')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
}*/

//getUsers('http://localhost:3000/users/email/test123@gmail.com')



axios.post('http://localhost:3000/users', {
    name: "test3",
    email: "test123@gmail.com",
    password: "teest123",
    phone: 999
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))


/*
//This is "on" or it registers the event
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
})

//This is emit
server.listen(3000);
*/

console.log('Listening to port 3000');