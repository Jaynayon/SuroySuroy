const Joi = require('joi');
const express = require('express');
const app = express();
//Installed Nodemon so changes made will restart the app globally
//Insalled JOI for input validation

app.use(express.json());

//The first parameter is exprected to be the request
//The second is expected to be the response
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

app.get('/api', (req, res) => {
    res.send(courses);
})

app.get('/api/course/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');
    res.send(course);
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.post('/api/courses', (req, res) => {
    const { error } = validateCourses(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(result);
})

app.put('/api/courses/:id', (req, res) => {
    //Find course if existing
    const course = courses.find(c => c.id === parseInt(req.params.id)); //Assigns the address of the specified course
    if (!course) return res.status(404).send('The course with the given ID was not found');

    //Validate course
    const { error } = validateCourses(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Update course
    course.name = req.body.name; //Objects and arrays in JS by default are passed by reference
    res.send(course);
})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course); //test
})

function validateCourses(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(course);
}

app.listen(3000, () => console.log("Listening to port 3000..."));