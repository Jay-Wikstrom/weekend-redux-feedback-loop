const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let sqlQuery = `
    INSERT INTO
        "feedback" ("feeling", "understanding", "support", "comments")
    VALUES
        ($1, $2, $3, $4)
    `;
    console.log('sqlQuery', sqlQuery);
    let sqlParams = [
        req.body.feedback,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]
    console.log('sqlParams', sqlParams);

    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
});