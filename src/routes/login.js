'use strict';

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login.pug');
});

export default router;

