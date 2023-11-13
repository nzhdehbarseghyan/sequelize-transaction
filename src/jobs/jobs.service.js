const {STATUSES} = require("../constants");

/**
 * Retrieves unpaid jobs based on the given query.
 *
 * @param {Object} req - The request object.
 * @param {Object} query - The query object.
 * @returns {Array} - The array of unpaid jobs.
 * @throws {Error} - If there was an error fetching unpaid jobs.
 */
const getUnPaidJobs = async (req, query) => {
    const { Job, Contract } = req.app.get('models');

    try {
        const unpaidJobs = await Contract.findAll({
            where: {
                status: STATUSES.IN_PROGRESS,
                ...query
            },
            include: {
                model: Job,
                where: {
                    paid: null
                }
            }
        });

        // Extract jobs from the result
        return unpaidJobs.flatMap(contract => contract.Jobs);
    } catch (error) {
        console.error('Error fetching unpaid jobs:', error);
        throw error;
    }
}

/**
 * Retrieves a job by its ID
 *
 * @param {Object} req - The request object
 * @param {number} id - The ID of the job to retrieve
 * @returns {Promise<Object|null>} - A promise that resolves to the job object or null if not found
 */
const getJobById = async (req, id) => {
    const {Job} = req.app.get('models');

    return await Job.findOne({where: { id }})
}

/**
 * Updates the paid status of a job.
 *
 * @param {Object} req - The request object.
 * @param {number} id - The ID of the job to update.
 * @returns {Promise} A promise that resolves to the updated job.
 */
const payForJob = async (req, id) => {
    const { Job } = req.app.get('models');

    return Job.update({paid: true}, {where: {id}});
}

/**
 * Deducts the client's balance by the specified amount.
 * @param {Object} req - The request object.
 * @param {Object} data - The data object containing the client ID and the amount to deduct.
 * @returns {Promise} - A promise that resolves to the updated profile.
 */
const deductClientBalance = async (req, data) => {
    const { Profile } = req.app.get('models');

    return Profile.update({balance: data.amount}, {where: { id: data.id }});
}

module.exports = {
    getUnPaidJobs,
    getJobById,
    payForJob,
    deductClientBalance,
}
