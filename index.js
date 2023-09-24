const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
// const { default: Users } = require('../client/src/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get("/", (req, res) => {
    UserModel.find({})
      .then((users) => {
        console.log("Users fetched:", users);
        res.json(users);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
  

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age
    })
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post('/createUser', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user); // HTTP status 201 for "Created"
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
