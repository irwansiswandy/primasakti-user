import Pusher from 'pusher-js';
import { PUSHER_SETTINGS } from '../_variables.js';

const MyPusher = new Pusher(PUSHER_SETTINGS.key, {
    // cluster: PUSHER_SETTINGS.cluster,
    wsHost: PUSHER_SETTINGS.host,
    wsPort: PUSHER_SETTINGS.port
});

MyPusher.subscribe(PUSHER_SETTINGS.channel);

export default MyPusher;