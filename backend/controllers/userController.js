const User = require('../models/User');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new user
exports.createUser = async (req, res) => {
  const { user, interest, age, mobile, email } = req.body;

  try {
    // Check if user already exists (by username or email)
    const existingUser = await User.findOne({
      $or: [{ user }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username or Email already exists" });
    }

    // Create new user if no duplicate found
    const newUser = new User({ user, interest, age, mobile, email });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    // Check if the email already exists (for a different user)
    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser._id.toString() !== id) {
      return res.status(400).json({ message: 'Email is already in use by another user.' });
    }

    // Update user details if email is unique or the same as the existing one
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
