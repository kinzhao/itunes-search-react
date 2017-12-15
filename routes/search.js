var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = req.baseUrl.replace('/search/', '');

  axios.get(`https://itunes.apple.com/search?term=${query}`)
    .then((response) => {
      response.data.results.map((data) => data.artworkUrl200 = data.artworkUrl100.replace('100x100', '200x200'));
      return response.data.results;
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));

});

module.exports = router;
