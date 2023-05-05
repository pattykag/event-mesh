const cds = require('@sap/cds');

module.exports = cds.service.impl(async (srv) => {
    const messaging = await cds.connect.to('messaging');
    const topic = 'acc/acc/productem/CAP-meshreceive-srv/msg1';

    srv.on('sendingMessage', async (req) => {
        console.log('Entering EM send');
        const message = {
            'myProp': 'Sending message. Current Time: ' + new Date().toLocaleString()
        }

        messaging.emit(topic, message);
        return 'Message Sent';
    });
});