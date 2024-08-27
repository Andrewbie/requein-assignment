const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config');
const { verifyToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

// User login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('User not found');

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id, role: user.role }, jwtSecret);
  res.send({ token });
});

// User registration route
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).send('All fields are required');
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

// Protected routes for role-based access control
router.get('/admin-data', verifyToken, authorizeRole(['admin']), (req, res) => {
  res.send('This is the admin data');
});

router.get('/user-data', verifyToken, authorizeRole(['user']), (req, res) => {
  res.send('This is the user data');
});

router.get('/guest-data', verifyToken, authorizeRole(['guest']), (req, res) => {
  res.send('This is the guest data');
});

module.exports = router;
