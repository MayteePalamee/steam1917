const Camera = require('./module/camera');
const playVideo = require('./module/playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

Camera(stream => {
    playVideo(stream ,'localSteam')        
        const p = Peer({ initiator : location.hash === '#1', trickle : false, stream});
        p.on('signal', token => {
            $('#txtsignal').val(JSON.stringify(token));
        })
        p.on('stream', joinStream => playVideo(joinStream ,'joinSteam') )
        $("#connect").on('click', function(){
            const token = JSON.parse($('#txtjoin').val());
            p.signal(token)
    });
});