const squadClass = require('../models/squadclass');

getAllSquad =(req,res,next)=>{
    const squad = squadClass.getAll();
    res.json(squad);
    //res.send('Hola desde el controllador .TODO :  INDEX...🐦🐦🐦 ')
}

module.exports = {
    getAllSquad
};
