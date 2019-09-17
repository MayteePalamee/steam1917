function Camera(){
    navigator.mediaDevices.getUserMedia({video :true, audio : true})
    .then(function(stream) {
    /* use the stream */
        console.log(stream)
        const video = document.getElementById('localSteam');
        video.srcObject = stream;
        video.onloadedmetadata = function(){
            video.play();
        }
    })
    .catch(function(err) {
    /* handle the error */
        console.log(err)
    });
}

module.exports = Camera;