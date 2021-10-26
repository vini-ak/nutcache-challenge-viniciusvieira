var express = require('express');
var router = express.Router();
var axios = require('axios');

const ENDPOINT = 'b9c61db117e7474191bbebd30affc675';
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
router.delete('/:id', async function(req, res, next) {
  try {
    let id = req.params.id;

    await axios.delete(`${baseRoute}/${id}`)
      .then((response) => res.send(response.data))
      .catch((error) => res.send(error));

  } catch (error) {
    console.error("GG", err);
  }
});

/*
 * CREATE EMPLOYEE
 */
router.post('/', async function(req, res, next) {
  try {
    await axios.post(baseRoute, req.body)
      .then(response => res.send(response.data))
      .catch(error => res.send(error))
  } catch(e) {
    console.error("GG", err);
  }
})

/*
 * UPDATE EMPLOYEE
 */
router.put('/:id', async function(req, res, next) {
  try {
    let id = req.params.id;

    await axios.put(`${baseRoute}/${id}`, req.body)
      .then(response => res.send(response.data))
      .catch(error => res.send(error))
  } catch(e) {
    console.error("GG", e);
  }
})

module.exports = router;
