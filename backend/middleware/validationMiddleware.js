const { body, validationResult } = require('express-validator');

// Validation middleware
const validateUser = [
  body('user').notEmpty().withMessage('Name is required').trim(),
  body('interest').isArray().withMessage('Interest must be an array').custom((value) => value.length > 0).withMessage('At least one interest is required'),
  body('age').isInt({ min: 1 }).withMessage('Age must be a positive integer'),
  body('mobile').isMobilePhone().withMessage('Mobile number must be valid'),
  body('email').isEmail().withMessage('Email must be valid').normalizeEmail(),
  
  // Catching validation errors and responding with the first error
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateUser
};
