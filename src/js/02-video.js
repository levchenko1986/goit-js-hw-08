import trottle from 'lodash/throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const KEY_VIDEO = 'videoplayer-current-time';
player.on('timeupdate', trottle(function(data) {
    localStorage.setItem(KEY_VIDEO, data.seconds);
}, 1000));

player.setCurrentTime(localStorage.getItem(KEY_VIDEO)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});

