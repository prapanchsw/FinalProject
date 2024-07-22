var express = require("express");
var cors = require("cors");
require("./connection");
var model = require("./model/user");

// initializing
var app = express();

app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Received login request for email: ${email}`);

  try {
    const user = await model.findOne({ email: email.trim() });
    if (user) {
      console.log(`User found: ${user.email}`);
      if (user.password === password.trim()) {
        console.log("Login successful");
        return res.json({ status:"success",user:{email:user.email,name:user.name}});
      } else {
        console.log("Incorrect password");
        return res.json("password incorrect");
      }
    } else {
      console.log("User not found");
      return res.json("user not found");
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json("Internal server error");
  }
});

app.post('/add', async (req, res) => {
  try {
    console.log('getting')
    await model(req.body).save();
    res.send("Data Saved");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data");
  }
});

app.get('/userview', async (req, res) => {
  try {
    console.log('Fetching user data...');
    const users = await model.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ status: 'error', message: 'Error fetching user data' });
  }
});
app.listen(3000, () => {
  console.log('app is running');
});

