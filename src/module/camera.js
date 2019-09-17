function Camera(cb){
    navigator.mediaDevices.getUserMedia({video :true, audio : true})
    .then(stream => { 
        cb(stream);        
    })
    .catch(function(err) {
    /* handle the error */
        console.log(err)
    });
}

module.exports = Camera;