const express = require('express');

const {
    getAllPlanets,
} = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planeets', getAllPlanets);

module.exports = planetsRouter;