const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const authMiddleware = require('../middlewares/auth.middleware');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email format').trim(),
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long')
        .trim(),
    body('fullname.lastname')
        .optional() // Optional field
        .isLength({ min: 3 })
        .withMessage('Last name must be at least 3 characters long')
        .trim(),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .trim(),
    body('vehicle.color')
        .isLength({ min: 3 })
        .withMessage('Color must be at least 3 characters long')
        .trim(),
    body('vehicle.plate')
        .isLength({ min: 3 })
        .withMessage('Plate must be at least 3 characters long')
        .trim(),
    body('vehicle.capacity')
        .isInt({ min: 1 })
        .withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType')
        .isIn(['car', 'motorcycle', 'auto'])
        .withMessage('Invalid vehicle type'),
],
    captainController.registerCaptain
);

// Export the router
module.exports = router;