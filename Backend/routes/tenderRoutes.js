const express = require('express');
const { createTender, getTenders, getTenderById, updateTender, deleteTender } = require('../controllers/tenderController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createTender);
router.get('/', getTenders);
router.get('/:id', getTenderById);
router.put('/:id', authenticateToken, updateTender);
router.delete('/:id', authenticateToken, deleteTender);

module.exports = router;
