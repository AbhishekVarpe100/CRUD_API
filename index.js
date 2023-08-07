const connection = require('./Connection')
const express = require('express')
const bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())


//Reading all employees
app.get('/employee', (req, res) => {
    connection.query('select*from employee ', (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(result);
            res.send(result)
        }
    })
})

//Reading single employee
app.get('/employee/:id', (req, res) => {
    connection.query('select*from employee where id=?', [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(result);
            res.send(result)
        }
    })
})

// Delete a employee

app.delete('/employee/:id', (req, res) => {
    connection.query('delete from employee where id=?', [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(result);
            res.send(result)
        }
    })
})

// Insert employee
app.post('/employee', (req, res) => {
    var emp = req.body;
    var empData = [emp.name, emp.salary];
    connection.query('insert into employee(name,salary) values(?)', [empData], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(result);
            res.send(result)
        }
    })
})

//Update employee
app.patch('/employee', (req, res) => {
    var emp = req.body;
    connection.query('update employee set ? where id=' + emp.id, [emp], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(result);
            res.send(result)
        }
    })
})

app.listen(3000, () => { console.log("Express server is running on port 3000") })