var express = require('express');
var router = express.Router();
var axios = require('axios');

const ENDPOINT = '7522265a2c6741b7bae8de112169cfb0';
const baseRoute = `https://crudcrud.com/api/${ENDPOINT}/nutemployees`;

/*
 * GET ALL EMPLOYEES
 */
router.get('/', async function(req, res, next) {
  try {

    await axios.get(baseRoute)
      .then((response) => res.send(response.data))
      .catch((error) => res.send(error));

  } catch (error) {
    console.error("GG", err);
  }
});

/*
 * GET EMPLOYEE
 */
router.get('/:id', async function(req, res, next) {
  try {
    let id = req.params.id;

    await axios.get(`${baseRoute}/${id}`)
      .then((response) => res.send(response.data))
      .catch((error) => res.send(error));

  } catch (error) {
    console.error("GG", err);
  }
});

/*
 * DELETE EMPLOYEE 
 */
router.delete('/:id', function(req, res, next) {
  try {
    let id = req.params.id;

    await axios.delete(`${baseRoute}/${id}`)
      .then((response) => res.send(response.data))
      .catch((error) => res.send(error));

  } catch (error) {
    console.error("GG", err);
  }
});

module.exports = router;
