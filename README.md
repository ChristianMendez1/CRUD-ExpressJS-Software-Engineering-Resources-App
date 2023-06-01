# CRUD-Express-SEResourcesApp

MERN Stack App that allows you to create, read, update, and delete data pertaining to software engineering. Great for taking notes and applying for jobs.

# Motivation

As a software engineering bootcamp graduate it can be tedious to visit my bookmarks to click all of the links I need and then look through different documents and google to find notes or information that I need. This app makes all of that streamline. In one page you have everything you need.

# Screenshots

![readmescreenshot](https://i.imgur.com/5OFUF6y.png)

# Built with

MERN Stack, Mongoose, MongoDB, Express, React, Node, Javascript, CSS, and HTML.

# Features

Features a Front-end that uses React and Back-end that uses Express. The Back-end creates an API and stores it using MongoDB. The Front-end Fetches the API and allows you to create new data, edit data, display data, and delete data. The data is designed to help you keep your notes on Software Engineering in one place. 

# How to use

Deployed through https://crud-reactjs-seresourcesapp.onrender.com

# Approach taken

Express uses Mongodb to create a schema and store data. Routes are used to do CRUD functions. A seed route is used to test data. React then maps the data from the MongoDb database and display them. Buttons and input tags are used to allow user to create, edit, and delete data. The data is fetched using my Back-end app as the baseURL.

# Code Example

```
const express = require('express');
const router = express.Router();
const Resources = require('../models/resources.js') 
const resourceData = require('../utilities/data.js')


router.get('/', (req, res)=>{
    Resources.find({}, (err, foundResources)=>{
        res.json(foundResources)
    })
});

router.get('/seed', async (req, res) => {
        await Resources.deleteMany({});
        await Resources.insertMany(resourceData);
  });

router.delete('/:id', (req, res)=>{
    Resources.findByIdAndRemove(req.params.id, (err, deletedResource)=>{
        res.json(deletedResource)
    })
});
```

# Installation
```
Clone through https://github.com/ChristianMendez1/CRUD-ExpressJS-Software-Engineering-Resources-App
Tested through Visual Stuidio Code's live server. 
Run npm install then nodemon or npm start.
```

# Front-end Link
https://github.com/ChristianMendez1/CRUD-ReactJS-Software-Engineering-Resources-App

# Project Planning
![readmescreenshot](https://i.imgur.com/s1P4AdS.png)

# Credits

```
My instructor Tishana's todo list app
https://cheatography.com/programming/ for css ideas
```