// get the client
const mysql = require('mysql2');
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todo'
});

connection.connect((error) => {
    if (error) {
        console.log("err");
        process.exit();
    } else {
        console.log("Database connected");
    }
});

app.get('/get_todo', (request, responce) => {
    const query = "SELECT * FROM list";
    connection.query(query, (err, result) => {
        responce.status(200).send(result);
    })
})

// app.login('/login', (req, resp) => {

// });

app.post('/add_task', (request, responce) => {
    const task = request.body.task;
    const query = `INSERT INTO list (task) VALUES ('${task}')`;
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            responce.status(500).send({
                success: false,
                msg: error
            });
        } else {
            if (result.affectedRows) {
                responce.status(200).send({
                    success: true,
                    msg: "Task added"
                });
            } else {
                responce.status(400).send({
                    success: false,
                    msg: "Task not added"
                });
            }
        }
    })
})

app.post('/delete_task', (request, responce) => {
    const id = request.body.id;
    const query = `DELETE FROM list WHERE id = ${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            responce.status(500).send({
                success: false,
                msg: err
            });
        } else {
            if (result.affectedRows === 1) {
                responce.status(200).send({
                    success: true,
                    msg: "Task Deleted"
                })
            } else {
                responce.status(400).send({
                    success: false,
                    msg: 'Error to Delete task'
                });
            }
        }
    })
})
app.post('/done_task', (request, responce) => {
    const id = request.body.id;
    const is_done = request.body.is_done;
    const query = `UPDATE list SET is_done = '${is_done}' WHERE id = ${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            responce.status(500).send({
                success: false,
                msg: err
            });
        } else {
            if (result.affectedRows === 1) {
                responce.status(200).send({
                    success: true,
                    msg: "Task Done"
                })
            } else {
                responce.status(400).send({
                    success: false,
                    msg: 'Error to change task status'
                });
            }
        }
    })
})

app.post('/update_task', (request, responce) => {
    const id = request.body.id;
    const task = request.body.task;
    const query = `UPDATE list SET task = '${task}' WHERE id = ${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            responce.status(500).send({
                success: false,
                msg: err
            });
        } else {
            if (result.affectedRows === 1) {
                responce.status(200).send({
                    success: true,
                    msg: "Task Updated"
                })
            } else {
                responce.status(400).send({
                    success: false,
                    msg: 'Error to update task'
                });
            }
        }
    })
})
app.listen(5000, () => console.log('app is running on 5000 port'));