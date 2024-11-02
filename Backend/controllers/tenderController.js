const db = require('../config/db');

// Create a new tender
exports.createTender = async (req, res) => {
  const { number, description, document_link, closing_date } = req.body;
  try {
    const newTender = await db.one(
      'INSERT INTO tenders (number, description, document_link, closing_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [number, description, document_link, closing_date]
    );
    res.status(201).json(newTender);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create tender' });
  }
};

// Get all tenders
exports.getTenders = async (req, res) => {
  try {
    const tenders = await db.any('SELECT * FROM tenders ORDER BY date_added DESC');
    res.json(tenders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tenders' });
  }
};

// Get a specific tender
exports.getTenderById = async (req, res) => {
  const { id } = req.params;
  try {
    const tender = await db.oneOrNone('SELECT * FROM tenders WHERE id = $1', [id]);
    if (!tender) return res.status(404).json({ error: 'Tender not found' });
    res.json(tender);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tender' });
  }
};

// Update a tender
exports.updateTender = async (req, res) => {
  const { id } = req.params;
  const { number, description, document_link, closing_date } = req.body;
  try {
    const updatedTender = await db.one(
      'UPDATE tenders SET number = $1, description = $2, document_link = $3, closing_date = $4 WHERE id = $5 RETURNING *',
      [number, description, document_link, closing_date, id]
    );
    res.json(updatedTender);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update tender' });
  }
};

// Delete a tender
exports.deleteTender = async (req, res) => {
  const { id } = req.params;
  try {
    await db.none('DELETE FROM tenders WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete tender' });
  }
};
