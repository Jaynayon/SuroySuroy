//To test this file, input command "node ServiceTest.js"
const RestService = require('./src/Services/RestService')
const [getUsers] = RestService;

/*For efficiency, same result
const [getUsers] = require('./src/Services/RestService')
*/

getUsers();