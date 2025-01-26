// seeder.js
const mongoose = require('mongoose');
const User = require('../models/User');  // Import the User model

// Sample user data to seed
const users = [
  {
    user: "Harry",
    interest: ["Comics", "Sports"],
    age: 22,
    mobile: 4234243224,
    email: "harry@potter.com",
  },
  // You can add more users here if needed
];

const seedDatabase = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing users (optional, if you want to reset the database)
    await User.deleteMany({});

    // Insert new user data
    await User.insertMany(users);

    console.log('Data seeded successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.disconnect();
  }
};

seedDatabase();
