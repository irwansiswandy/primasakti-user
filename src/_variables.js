window._ = require('lodash');

const ServerHostname = 'http://192.168.0.91:81/';
const BaseApiURL = ServerHostname + 'api/';
const PUSHER_SETTINGS = {
    key: '9b0508a6e839d5d65234',
    cluster: 'ap1',
    channel: 'primasakti-user-dev'
};

export {
    ServerHostname,
    BaseApiURL,
    PUSHER_SETTINGS
};
