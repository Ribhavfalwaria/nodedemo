const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./dbconfig/database');
const userRoutes = require('./routes/userroute');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/user', userRoutes);

// Sync DB & Start Server
sequelize.sync({ force: false }) // change to true to drop & recreate tables
  .then(() => {
    console.log('✅ Database synced');
    
  })
  .catch(err => console.error('❌ Sync error:', err));

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));