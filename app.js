//Set constraints
var constraints = { video: { facingMode: "user" }, audio: false };

//Define constants
const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraSnap = document.querySelector("#camera--snap")

//Access camera and stream
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Irgendwas lief falsch.", error);
    });
}

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);