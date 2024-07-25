const express = require('express');
const cors = require('cors');
require('./connection');
const User = require('./model/user');

const app = express();

app.use(express.json());
app.use(cors());

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Received login request for email: ${email}`);

  try {
    const user = await User.findOne({ email: email.trim() });
    if (user) {
      console.log(`User found: ${user.email}`);
      if (user.password === password.trim()) {
        console.log('Login successful');
        return res.json({ status: 'success', user: { email: user.email, name: user.name, id: user._id } });
      } else {
        console.log('Incorrect password');
        return res.status(401).json({ status: 'error', message: 'Password incorrect' });
      }
    } else {
      console.log('User not found');
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});


app.get('/delete-expense', async (req, res) => {
  const { transactionId, userId } = req.query;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (user) {
      // Find and remove the transaction from the user's expenses array
      user.expense = user.expense.map(expenses =>
        expenses.filter(expense => expense._id.toString() !== transactionId)
      );
      // Save the updated user document
      await user.save();

      res.status(200).json({ status: 'success', message: 'Transaction deleted' });
    } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});
app.post('/add', async (req, res) => {
  try {
    console.log('Saving data...');
    await new User(req.body).save();
    res.status(201).send('Data Saved');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data');
  }
});

// Get all users
app.get('/userview', async (req, res) => {
  try {
    console.log('Fetching user data...');
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ status: 'error', message: 'Error fetching user data' });
  }
});

// Add expense route
app.post('/addexpense', async (req, res) => {
  const { email, category, body, amount, date } = req.body;

  // Validate request data
  if (!email || !category || !body || !amount || !date) {
    return res.status(400).json({ status: 'error', message: 'Missing required fields' });
  }

  try {
    // Log incoming data for debugging
    console.log('Adding expense with data:', { email, category, body, amount, date });

    // Find user
    const user = await User.findOne({ email: email.trim() });

    if (user) {
      // Create new expense object
      const newExpense = { category, body, amount, date: new Date(date) };
      user.expense.push([newExpense]); // Adjust based on your schema
      await user.save();
      res.status(201).json({ status: 'success', user });
    } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ status: 'error', message: 'Error adding expense' });
  }
});

// Get expenses route
app.get('/expenses', async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.findById(userId);

    if (user) {
     
      const expenses = user.expense.flat(2);
      res.status(200).json({ status: 'success', expenses });
    } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// Get user ID by email
app.get('/userid', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email: email.trim() });

    if (user) {
      res.status(200).json({ status: 'success', userId: user._id });
    } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user ID:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
