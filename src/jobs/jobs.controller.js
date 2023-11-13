const path = require('path');
const jobsService = require(path.join(__dirname, 'jobs.service.js'));
const { makeQuery } = require('../utils');

/**
 * Retrieves unpaid jobs based on the request profile.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const getUnPaidJobs = async (req, res) => {
    try {
        const query = makeQuery(req.profile);
        const jobs = await jobsService.getUnPaidJobs(req, query);

        if (!jobs) {
            return res.status(404).end()
        }

        res.json(jobs);
    } catch (error) {
        console.error('Error fetching contracts: error ', error);

        res.status(500).json({ error: 'An error occurred while processing your request. Please try again later.' });
    }
}

/**
 * Pay for a job
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {void}
 */
const payForJob = async (req, res) => {
    try {
        const { job_id } = req.params;
        const { balance } = req.profile;

        const job = await jobsService.getJobById(req, job_id);

        if (!job) {
            throw new Error('Job not found');
        }

        if (balance < job.price) {
            throw new Error('Insufficient balance');
        }

        await jobsService.deductClientBalance(req, { amount: balance - job.price, id: req.profile.id });
        await jobsService.payForJob(req, job_id);

        res.json({
            success: true,
            message: 'Payment successful',
        })
    } catch (error) {
        console.error('Pay for job error: ', error)

        res.status(500).json({ error: error });
    }
}

module.exports = {
    getUnPaidJobs,
    payForJob
}
