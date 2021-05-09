const router = require("express").Router();
const squadController = require('../controllers/squad.controller');
const leadscoachController = require('../controllers/leads-coach-controllers');


module.exports = () => {
// @Rutas GET
  router.get('/squad',squadController.getAllSquad) 
  router.get('/leads-coachs',leadscoachController.getAllLeadsCoach)   
  return router;
};
