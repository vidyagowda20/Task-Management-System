// import { createConnection } from 'mysql';
// import { title } from 'process';
// import {status} from 'statuses';

let mysql = require('mysql')
// let status = require('./index3.html')
var con=mysql.createConnection({
        user:'root',
        password:'root',
        host:'localhost',
        database:'task_data'
    })
    con.connect((err)=>{
        if(err){
            console.log(new Error("somthing went wrong,not connected to data base"));
        }
        else{
            console.log("database connected successfully...");
        }
    })
// let sql='CREATE TABLE dataitem(title VARCHAR(30),description VARCHAR(40),status VARCHAR(20),date Date)'
//     con.query(sql,(err,result)=>{
//         if(err) throw err
//         console.log("Table created successfully...");
//     })
title= document.getElementById('title').value;
description= document.getElementById('description').value;
let status= document.getElementById('status').value;
date=task.date;
console.log(title,description,status,date);

let data="INSERT INTO dataitem(title, description,status,date) VALUES('"+title+"','"+description+"','"+status+"','"+date+"')"
con.query(data,(err,result)=>{
    if(err) {
        console.log("data is not inserted");
    }
    else{
        console.log("Data inserted into the table");
    console.log("number of data inserted:",result.affectedRows);
    }
})