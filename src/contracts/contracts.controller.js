const path = require('path');
const contractsService = require(path.join(__dirname, 'contracts.service.js'));
const { makeQuery } = require('../utils');

/**
 * Retrieve a contract by its ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const getContractById = async (req, res) => {
    try {
        const { id } = req.params
        const query = makeQuery(req.profile, { id })

        const contract = await contractsService.getById(req, query);

        if (!contract) {
            return res.status(404).end()
        }

        res.json(contract)
    } catch (error) {
        console.error('Error fetching contracts:', error);

        res.status(500).json({ error: 'An error occurred while processing your request. Please try again later.' });
    }
}

/**
 * Retrieves the contracts for a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getContracts = async (req, res) => {
    try {
        const query = makeQuery(req.profile)
        const contracts = await contractsService.getAllByUserId(req, query);

        if (!contracts) {
            return res.status(404).end()
        }

        res.json(contracts)
    } catch (error) {
        console.error('Error fetching contracts:', error);

        res.status(500).json({ error: 'An error occurred while processing your request. Please try again later.' });
    }
}

module.exports = {
    getContractById,
    getContracts
}
