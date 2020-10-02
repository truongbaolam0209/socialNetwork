const express = require('express');
const connectDB = require('./config/db');


const app = express();


// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.use('/api/page', require('./routes/api/page'));
app.use('/api/comment', require('./routes/api/comment'));
app.use('/api/test', require('./routes/api/test'));





app.get('/', (req, res) => res.send('API Running ...'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`1 ... Server started on port ${PORT}`));