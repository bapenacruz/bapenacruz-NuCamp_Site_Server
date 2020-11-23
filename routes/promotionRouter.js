const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Sending all promotions to you');
})
.post((req, res) => {
    res.end(`Adding promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Getting promotion with Id: ${req.params.promotionId}`);
})
.post((req, res) => {
    res.end(`POST operation not supported on /promotion/${req.params.promotionId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Updating pormotion with Id ${req.params.promotionId} with the following: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting promotion with Id: ${req.params.promotionId}`);
});

module.exports = promotionRouter;