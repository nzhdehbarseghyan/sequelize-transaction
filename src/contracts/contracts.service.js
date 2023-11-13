const { Op } = require('sequelize');
const { STATUSES } = require('../constants');

/**
 * Retrieves a contract by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} query - The query object specifying the contract ID.
 * @returns {Promise<Object|null>} - A promise that resolves to the contract object, or null if not found.
 */
const getById = async (req, query) => {
    const { Contract } = req.app.get('models')

    return await Contract.findOne({ where: query })
}

/**
 * Retrieve all contracts by user ID
 * @param {Object} req - The request object
 * @param {Object} query - The query object containing the filter constraints
 * @returns {Promise<Array>} - A promise that resolves to an array of contracts
 */
const getAllByUserId = async (req, query) => {
    const { Contract } = req.app.get('models')

    return await Contract.findAll({
        where: {
            status: {
                [Op.not]: STATUSES.TERMINATED
            },
            ...query
        }
    })
}

module.exports = {
    getById,
    getAllByUserId
}
