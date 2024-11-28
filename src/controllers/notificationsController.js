const AWS = require('../config/aws');
const sns = new AWS.SNS();

exports.sendNotification = async (req, res) => {
    const { correo, pdfUrl } = req.body;

    if (!correo || !pdfUrl) {
        return res.status(400).json({ error: 'Correo and pdfUrl are required.' });
    }

    const params = {
        Message: `Tu nota de venta ha sido generada. Puedes descargarla en el siguiente enlace: ${pdfUrl}`,
        Subject: 'Nota de Venta Generada',
        TopicArn: process.env.SNS_TOPIC_ARN,
        MessageAttributes: {
            correo: {
                DataType: 'String',
                StringValue: correo,
            },
        },
    };

    try {
        // Enviar notificación mediante SNS
        await sns.publish(params).promise();

        res.status(200).json({ message: 'Notificación enviada exitosamente.' });
    } catch (error) {
        console.error('Error al enviar la notificación:', error.message);
        res.status(500).json({ error: 'Error al enviar la notificación.', details: error.message });
    }
};

