const express = require('express');
const router = express.Router();
const depositController = require('../controllers/depositController');

router.get('/list', depositController.listDeposits);
router.post('/create', depositController.createDeposit);
router.put('/update/:id', depositController.updateDeposit);
router.delete('/delete/:id', depositController.deleteDeposit);

module.exports = router;
