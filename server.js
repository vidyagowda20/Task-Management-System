const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'task_data'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
    // let sql = 'CREATE TABLE task(title VARCHAR(20),description VARCHAR(20),status VARCHAR(20),date DATE)'
    // db.query(sql,(err,result)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("Table inserted");
    //     }
    // })
    // let data = "INSERT INTO task(title,description,status,date) VALUES('sdfg','gjhu','gijti','2024-07-12')"
    // db.query(data, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log("Data inserted");
    //     }
    // })
});

app.post('/addTask', (req, res) => {
    const { title, description, status, date } = req.body;
    const query = "INSERT INTO dataitem (title, description, status, date) VALUES (title,description,status,date)";
    db.query(query, [title, description, status, date], (err, result) => {
        if (err) {
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Data inserted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
