require('dotenv').config();
const express = require('express');
const notificationsRoutes = require('./src/routes/notifications');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/notifications', notificationsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Notifications service running on port ${PORT}`);
});

