const cds = require('@sap/cds');

module.exports = cds.service.impl(async (srv) => {
    const messaging = await cds.connect.to('messaging');
    const topic = 'acc/acc/productem/CAP-meshreceive-srv/msg1';

    messaging.on(topic, msg => {
        console.log('===> R');
        const messagePayload = JSON.stringify(msg.data);
        console.log('===> Received message : ' + messagePayload);
    });
});