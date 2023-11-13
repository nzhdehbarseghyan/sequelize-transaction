const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const { sequelize } = require('./model');
const { getProfile } = require('./middleware/getProfile');

const contractsRouterPath = path.join(__dirname, 'contracts', 'contracts.router.js');
const contractsRoutes = require(contractsRouterPath);
const jobsRouterPath = path.join(__dirname, 'jobs', 'jobs.router.js');
const jobsRoutes = require(jobsRouterPath);

const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

app.use('/contracts', contractsRoutes);
app.use('/jobs', jobsRoutes);

module.exports = app;
