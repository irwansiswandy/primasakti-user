window._ = require('lodash');

const ServerHostname = 'http://192.168.0.244:81/';
// const ServerHostname = 'http://primasakti-network.ddns.net:281/';
const BaseApiURL = ServerHostname + 'api/';

/* PUSHER CONFIGURATION
 */
const PUSHER_SERVER_HOST = '192.168.0.2';
const PUSHER_SERVER_PORT = 6001;
const PUSHER_SETTINGS = {
    key: '937c40c45b8b04b84c49',
    cluster: 'ap1',
    channel: 'primasakti-user',
    host: PUSHER_SERVER_HOST,
    port: PUSHER_SERVER_PORT
};

export {
    ServerHostname,
    BaseApiURL,
    PUSHER_SETTINGS
};