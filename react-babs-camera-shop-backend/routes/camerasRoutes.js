var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('cameras').select().then(cameras => res.json(cameras))
});

router.get('/:id', function(req, res) {
  knex('cameras').select().where('id', req.params.id).then(camera => res.json(camera))
});

router.post('/', function(req, res) {
  knex('cameras').returning('*').insert(req.body).then((camera) => res.json(camera));
});

router.patch('/cart/:id/add', function(req, res) {
  knex('cameras').returning('*').update({in_cart: true}).where('id', req.params.id).then(camera => res.json(camera));
});

router.patch('/cart/:id/remove', function(req, res) {
  knex('cameras').returning('*').update({in_cart: false}).where('id', req.params.id).then(camera => res.json(camera));
});

router.delete('/:id', function(req, res) {
  knex('cameras').del().where('id', req.params.id).then(() => {
    knex('cameras').select().then(cameras => res.json(cameras))
  });
});


module.exports = router;
