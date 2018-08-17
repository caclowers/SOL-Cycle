const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
   console.log('id', req.user.id);
   
   const user_id = req.user.id
   const queryText = `SELECT * FROM "locations" WHERE "user_id" = $1;`;
   pool.query(queryText, [user_id]).then((results) => {
      console.log(results.rows);
      
      res.send(results.rows)
   })
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
   const username = req.body.username;
   const user_id = req.user.id
   const password = encryptLib.encryptPassword(req.body.password);
   const city = req.body.city;
   const state = req.body.State;
   const latitude = '';
   const longitude = '';
   const uvIndex = '';
   const date = req.body.date;


   const queryText = 'INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id';
   const queryText2 = 'INSERT INTO "locations" (city, state, latitude, longitude, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING id';
   const queryText3 = 'INSERT INTO "uv_data" (date, reported_uv_index, location_id) VALUES ($1, $2, $3)';
   pool.query(queryText, [username, password]).then(
      pool.query(queryText2, [city, state, latitude, longitude, user_id])
   ).then(
      pool.query(queryText3, [date, uvIndex, location_id])
   ).then(
      () => { res.sendStatus(201); }
   ).catch((err) => { next(err); });
});

module.exports = router;