const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let sqlQuery = `
        SELECT * FROM "feedback"
        ORDER BY "date" DESC;
    `;
    pool.query(sqlQuery)
        .then((dbRes) => {
            res.send(dbRes.rows);
        }).catch((error) => {
            console.log('GET error', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let sqlQuery = `
    INSERT INTO
        "feedback" ("feeling", "understanding", "support", "comments")
    VALUES
        ($1, $2, $3, $4);
    `;
    console.log('sqlQuery', sqlQuery);
    let sqlParams = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]
    console.log('sqlParams', sqlParams);

    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            console.log(dbRes.rows)
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error in DB post', error)
            res.sendStatus(500);
        });
});

module.exports = router;