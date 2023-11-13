const { Router } = require('express');
const path = require('path');
const router = Router();

const { getUnPaidJobs, payForJob } = require(path.join(__dirname, 'jobs.controller.js'));
const { getProfile } = require("../middleware/getProfile");

router.get('/unpaid', getProfile, getUnPaidJobs);
router.post('/:job_id/pay', getProfile, payForJob);

module.exports = router;
