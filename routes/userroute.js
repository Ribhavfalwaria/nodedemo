const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create User
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Get User by ID
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// Update User
router.put('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  await user.update(req.body);
  res.json(user);
});

// Delete User
router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  await user.destroy();
  res.json({ message: 'User deleted' });
});

module.exports = router;
