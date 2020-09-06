window._ = require('lodash');

/* SERVER CONFIGURATION
*/
// const ServerHostname = 'http://192.168.0.1:82/';
const ServerHostname = 'http://primasakti.ddns.net:2182/';
const BaseApiURL = ServerHostname + 'api/';

/* PUSHER CONFIGURATION
 */
// const PUSHER_SERVER_HOST = '192.168.0.1';
// const PUSHER_SERVER_PORT = 6001;
const PUSHER_SERVER_HOST = 'primasakti.ddns.net';
const PUSHER_SERVER_PORT = 2160;
const PUSHER_SETTINGS = {
    host: PUSHER_SERVER_HOST,
    port: PUSHER_SERVER_PORT,
    key: 'UV8MXUXlskm2okdsoPdTl5Bc',
    channel: 'primasakti-user'
    // cluster: 'ap1',
};

export {
    ServerHostname,
    BaseApiURL,
    PUSHER_SETTINGS
};