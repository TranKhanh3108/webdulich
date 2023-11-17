import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
//const express = require('express');
//const colors = require('colors');

//configure env
dotenv.config();

//database config
connectDB();
 
//rest object
const app = express();

app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

//rest api
app.get('/', (req,res)=> {
    res.send(
        res.send('<h1>Chào mừng đến web du lịch</h1>')
    )
});

//port
const port = process.env.port;

//run listen
app.listen(port, () => {
    console.log('Server running on',process.env.DEV_MODE,'mode on port',port);
});