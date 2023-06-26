const constraints = { video: true, audio: false }

const stream = await navigator.mediaDevices.getUserMedia(constraints)

const video = document.querySelector('#video')

video.srcObject = stream;
