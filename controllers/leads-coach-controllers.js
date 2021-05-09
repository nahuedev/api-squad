const leadscoach = require('../models/leadscoachs');

getAllLeadsCoach =(req,res,next)=>{
    const leadsAndCoachs= leadscoach.getAll()
    res.json(leadsAndCoachs);
}

module.exports = {
    getAllLeadsCoach
};
