const router = require('express').Router();

router.get('/', (req, res) =>
  res.status(200).json({ message: 'Node + Express (API)' })
);

router.post('/', (req, res) =>
  res.status(200).json({ message: 'Node + Express (API)', body: req.body })
);

module.exports = router;
