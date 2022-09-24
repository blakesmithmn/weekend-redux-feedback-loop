// feedback router
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";')
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in GET:', error);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    // VARIABLES FOR QUERY
    let feedback = req.body;
    console.log('Feedback is:', feedback);
    let feeling = Number(feedback.feeling);
    console.log('Feeling is:', feeling);
    let understanding = Number(feedback.understanding);
    let support = Number(feedback.support);
    let comments = feedback.comments;

    let sqlQuery = `
        INSERT INTO "feedback"
        ("feeling","understanding","support","comments")
        VALUES
        ($1,$2,$3,$4);
    `

    let sqlValues = [feeling, understanding, support, comments];
    console.log('POST feedback');
    pool.query(sqlQuery, sqlValues)
        .then((poolRes) => {
            res.sendStatus(201);
        })
        .catch((poolErr) => {
            console.log('error in POST:', poolErr);
            res.sendStatus(500);
        })
})

module.exports = router;