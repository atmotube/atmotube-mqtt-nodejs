var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/csv');
    req.app.locals.db.collection('data').find({mac: req.query.mac, pm25: {$gt: 0}}).toArray(function (err, result) {
        if (err) throw err;
        data = 'date, pm 1, pm 2.5, pm 10';
        for (var i = 0; i < result.length; i++) {
            data += '\n' + result[i].timestamp + "," + result[i].pm1 + "," + result[i].pm25 + "," + result[i].pm10;
        }
        res.send(data);
    });
});

module.exports = router;
