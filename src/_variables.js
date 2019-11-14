window._ = require('lodash');

const ServerHostname = 'http://localhost:81/';
const BaseApiURL = ServerHostname + 'api/';
const PUSHER_SETTINGS = {
    key: '937c40c45b8b04b84c49',
    cluster: 'ap1',
    channel: 'primasakti-user'
};

export {
    ServerHostname,
    BaseApiURL,
    PUSHER_SETTINGS
};
