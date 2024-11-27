const AWS = require('aws-sdk');

// Configuración de AWS SDK usando variables de entorno
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
  region: 'us-east-1',
});

module.exports = AWS;
