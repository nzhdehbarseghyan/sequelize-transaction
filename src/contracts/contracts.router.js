const { Router } = require('express');
const path = require('path');
const router = Router();

const { getContractById, getContracts } = require(path.join(__dirname, 'contracts.controller.js'));
const { getProfile } = require("../middleware/getProfile");

router.get('/:id', getProfile, getContractById);
router.get('/', getProfile, getContracts);

module.exports = router;
