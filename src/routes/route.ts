import express from 'express';

let router = express.Router();

router.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default router;