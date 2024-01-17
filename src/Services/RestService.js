import axios from 'axios';
//Android default local: 10.0.2.2
const RestService = {
    getUsers: getUsers,
    getUserByEmail: getUserByEmail,
    verifyUser: verifyUser,
    createUser: createUser
}

async function getUsers() {
    try {
        const response = await axios.get('http://10.0.2.2:3000/users');
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
}
async function getUserByEmail(email) {
    try {
        const response = await axios.get(`http://10.0.2.2:3000/users/email/${email}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
/**
 * Verifies user credentials by checking if the provided email and password match
 * an existing user in the database.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password associated with the user's account.
 * @returns {boolean} - True if the provided credentials are valid, otherwise false.
 */
async function verifyUser(email, password) {
    try {
        const response = await axios.get(`http://10.0.2.2:3000/users/email/${email}`);

        // Check if the request was successful (status code 2xx)
        if (response.status >= 200 && response.status < 300) {
            // Verify email and password
            console.log(`Status: ${response.status}`);
            return response.data.email === email && response.data.password === password;
        } else {
            // Log information about the error
            console.error(`Error: ${response.status}`);
            console.error(response.data); // Log response data if available

            // Handle other status codes
            return false;
        }
    } catch (error) { //error.response.status/data/message
        // Log any other errors that occur
        console.log(error)
        return false;
    }
}
async function createUser(name, email, password, phone) {
    try {
        const response = await axios.post('http://10.0.2.2:3000/users', {
            name: name,
            email: email,
            password: password,
            phone: phone
        })
        return response.data
    } catch (error) {
        console.log(error.response.data.message)
        //return false;
    }
}
//Return an object to allow destructuring
module.exports = RestService