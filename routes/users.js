const express = require('express');
const router = express.Router();
const User = require('../db/models/user.schema');
const userService = require('../services/user.service')(User);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user:'Ok'});
});

router.post('/register',async (req,rep)=>{
  const {... _user}=req.body;
  try {
    let response = await userService.register(_user);
    res.json(response);
  } catch (error) {
    next(error)
  }
})

module.exports = router;
