import Pusher from 'pusher-js';
import { PUSHER_SETTINGS } from '../_variables.js';

const MyPusher = new Pusher(PUSHER_SETTINGS.key, {
    cluster: PUSHER_SETTINGS.cluster
});

MyPusher.subscribe(PUSHER_SETTINGS.channel);

export default MyPusher;
