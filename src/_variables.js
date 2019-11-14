window._ = require('lodash');

const ServerHostname = 'http://localhost:81/';
// const ServerHostname = 'http://primasakti-network.ddns.net:281';

const BaseApiURL = ServerHostname + 'api/';
const PUSHER_SETTINGS = {
    // irwansiswandymks@gmail.com
    // key: '937c40c45b8b04b84c49',
    // cluster: 'ap1',
    // channel: 'primasakti-user'

    // primasakti1.sby@gmail.com
    key: '9b0508a6e839d5d65234',
    cluster: 'ap1',
    channel: 'primasakti-user'
};

export {
    ServerHostname,
    BaseApiURL,
    PUSHER_SETTINGS
};
